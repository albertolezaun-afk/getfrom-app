import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { store, useStore } from '../../store/nodeStore'
import type { Node } from '../../types'
import Outliner from '../outliner/Outliner'

type DiaryPanelTab = 'pending' | 'timeline'

function getDiaryForDate(date: Date): Node | null {
  const start = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  const end = new Date(start.getTime() + 86400000)
  for (const node of store.nodes.values()) {
    if (!node.isDiaryEntry || node.deletedAt) continue
    if (!node.diaryDate) continue
    const d = new Date(node.diaryDate)
    if (d >= start && d < end) return node
  }
  return null
}

export default function DiaryView() {
  const s = useStore()
  const navigate = useNavigate()
  const [dateOffset, setDateOffset] = useState(0) // 0 = hoy, -1 = ayer, etc.
  const [panelTab, setPanelTab] = useState<DiaryPanelTab>('pending')

  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + dateOffset)

  const diary = dateOffset === 0 ? s.todayDiary() : getDiaryForDate(targetDate)

  if (s.isSyncing && !diary) {
    return <div className="view-loading">Cargando...</div>
  }

  const date = targetDate
  const dayName = date.toLocaleDateString('es-ES', { weekday: 'long' })
  const dateStr = date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })

  function formatOffsetLabel(): string {
    if (dateOffset === 0) return 'Hoy'
    if (dateOffset === -1) return 'Ayer'
    if (dateOffset === 1) return 'Mañana'
    return dateStr
  }

  // ── Pending tasks logic ────────────────────────────────────────────────
  const now = new Date()
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999)

  const allTasks = s.allActive().filter(n => n.status !== null && n.status !== 'done' && !n.deletedAt)

  const overdue = allTasks.filter(n => {
    if (!n.due) return false
    return new Date(n.due) < todayStart
  })

  const todayTasks = allTasks.filter(n => {
    if (!n.due) return false
    const d = new Date(n.due)
    return d >= todayStart && d <= todayEnd
  })

  const openLoops = allTasks.filter(n => !n.due).slice(0, 10)

  function toggleTask(id: string, currentStatus: string | null) {
    const newStatus = currentStatus === 'done' ? 'pending' : 'done'
    store.updateNode(id, { status: newStatus })
  }

  // ── Timeline logic ─────────────────────────────────────────────────────
  const hours = Array.from({ length: 15 }, (_, i) => i + 8) // 8 to 22
  const currentHour = now.getHours()
  const currentMinutes = now.getMinutes()

  const allDayTasks = s.allActive().filter(n => n.status !== null && !n.deletedAt && n.due)

  // Group today's tasks by hour
  const tasksByHour: Record<number, typeof allDayTasks> = {}
  for (const h of hours) {
    tasksByHour[h] = []
  }
  allDayTasks.forEach(n => {
    if (!n.due) return
    const d = new Date(n.due)
    if (d >= todayStart && d <= todayEnd) {
      const h = d.getHours()
      if (h >= 8 && h <= 22) {
        tasksByHour[h] = tasksByHour[h] || []
        tasksByHour[h].push(n)
      }
    }
  })

  function renderPending() {
    const hasAnything = overdue.length > 0 || todayTasks.length > 0 || openLoops.length > 0

    if (!hasAnything) {
      return (
        <div className="diary-panel-content">
          <div style={{ fontSize: 13, color: 'var(--text-tertiary)', textAlign: 'center', padding: '20px 8px' }}>
            Nada pendiente hoy 🎉
          </div>
        </div>
      )
    }

    return (
      <div className="diary-panel-content">
        {overdue.length > 0 && (
          <div className="diary-pending-section">
            <div className="diary-pending-label" style={{ color: '#ef4444' }}>Vencidas</div>
            {overdue.map(t => (
              <div key={t.id} className="diary-task-chip" onClick={() => navigate(`/node/${t.id}`)}>
                <input
                  type="checkbox"
                  className="diary-task-check"
                  checked={t.status === 'done'}
                  onChange={e => { e.stopPropagation(); toggleTask(t.id, t.status) }}
                  onClick={e => e.stopPropagation()}
                />
                <span style={{ fontSize: 13, color: t.status === 'done' ? 'var(--text-tertiary)' : 'var(--text-primary)', textDecoration: t.status === 'done' ? 'line-through' : 'none' }}>
                  {t.text || 'Sin título'}
                </span>
              </div>
            ))}
          </div>
        )}

        {todayTasks.length > 0 && (
          <div className="diary-pending-section">
            <div className="diary-pending-label">Hoy</div>
            {todayTasks.map(t => (
              <div key={t.id} className="diary-task-chip" onClick={() => navigate(`/node/${t.id}`)}>
                <input
                  type="checkbox"
                  className="diary-task-check"
                  checked={t.status === 'done'}
                  onChange={e => { e.stopPropagation(); toggleTask(t.id, t.status) }}
                  onClick={e => e.stopPropagation()}
                />
                <span style={{ fontSize: 13, color: t.status === 'done' ? 'var(--text-tertiary)' : 'var(--text-primary)', textDecoration: t.status === 'done' ? 'line-through' : 'none' }}>
                  {t.text || 'Sin título'}
                </span>
              </div>
            ))}
          </div>
        )}

        {openLoops.length > 0 && (
          <div className="diary-pending-section">
            <div className="diary-pending-label">Sin fecha</div>
            {openLoops.map(t => (
              <div key={t.id} className="diary-task-chip" onClick={() => navigate(`/node/${t.id}`)}>
                <input
                  type="checkbox"
                  className="diary-task-check"
                  checked={t.status === 'done'}
                  onChange={e => { e.stopPropagation(); toggleTask(t.id, t.status) }}
                  onClick={e => e.stopPropagation()}
                />
                <span style={{ fontSize: 13, color: t.status === 'done' ? 'var(--text-tertiary)' : 'var(--text-primary)', textDecoration: t.status === 'done' ? 'line-through' : 'none' }}>
                  {t.text || 'Sin título'}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  function renderTimeline() {
    return (
      <div className="diary-panel-content">
        {hours.map(h => {
          const isCurrentHour = h === currentHour
          const tasks = tasksByHour[h] || []
          return (
            <div key={h}>
              {isCurrentHour && (
                <div className="timeline-now-line" title={`${currentHour}:${String(currentMinutes).padStart(2, '0')}`} />
              )}
              <div className="timeline-row">
                <span className="timeline-hour-label">{String(h).padStart(2, '0')}:00</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, flex: 1 }}>
                  {tasks.map(t => (
                    <span
                      key={t.id}
                      className="timeline-task-chip"
                      onClick={() => navigate(`/node/${t.id}`)}
                      title={t.text || 'Sin título'}
                    >
                      {t.text || 'Sin título'}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="view diary-view">
      <div className="diary-layout">
        {/* Left: outliner */}
        <div className="diary-main">
          <div className="view-header">
            <div className="diary-date">
              <div className="diary-nav">
                <button
                  onClick={() => setDateOffset(d => d - 1)}
                  title="Día anterior"
                >←</button>
                <span className="diary-date-label">{formatOffsetLabel()}</span>
                <button
                  onClick={() => setDateOffset(d => d + 1)}
                  disabled={dateOffset >= 0}
                  title="Día siguiente"
                >→</button>
                {dateOffset !== 0 && (
                  <button onClick={() => setDateOffset(0)} title="Volver a hoy">Hoy</button>
                )}
              </div>
              <span className="diary-day">{dayName.charAt(0).toUpperCase() + dayName.slice(1)}</span>
              <span className="diary-full-date">{dateStr}</span>
            </div>
          </div>

          <div className="view-body">
            {diary ? (
              <Outliner
                parentId={diary.id}
                autoFocusEmpty
                placeholder="Escribe lo que está en tu mente..."
                className="diary-outliner"
              />
            ) : (
              <div className="view-empty-state" style={{ padding: '32px 0' }}>
                <p style={{ color: 'var(--text-tertiary)', fontSize: 14 }}>
                  No hay entrada de diario para este día
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right: panel */}
        <div className="diary-right-panel">
          <div className="diary-panel-tabs">
            <button
              className={`diary-panel-tab ${panelTab === 'pending' ? 'active' : ''}`}
              onClick={() => setPanelTab('pending')}
            >
              Pendiente
            </button>
            <button
              className={`diary-panel-tab ${panelTab === 'timeline' ? 'active' : ''}`}
              onClick={() => setPanelTab('timeline')}
            >
              Timeline
            </button>
          </div>
          {panelTab === 'pending' ? renderPending() : renderTimeline()}
        </div>
      </div>
    </div>
  )
}
