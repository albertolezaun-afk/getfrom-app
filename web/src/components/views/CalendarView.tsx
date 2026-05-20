import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../store/nodeStore'
import type { Node } from '../../types'

function startOfWeek(date: Date): Date {
  const d = new Date(date)
  const day = d.getDay()
  // Monday = 0 offset
  const diff = (day === 0 ? -6 : 1 - day)
  d.setDate(d.getDate() + diff)
  d.setHours(0, 0, 0, 0)
  return d
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })
}

const DAY_NAMES = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']

interface NodeChipProps {
  node: Node
  onClick: () => void
  compact?: boolean
}

function NodeChip({ node, onClick, compact }: NodeChipProps) {
  const isDone = node.status === 'done'
  const isTask = node.status !== null

  return (
    <button
      className={`calendar-node-chip ${isDone ? 'calendar-node-chip--done' : ''} ${compact ? 'calendar-node-chip--compact' : ''}`}
      onClick={onClick}
      title={node.text || 'Sin título'}
    >
      {isTask && (
        <span className="calendar-node-status">
          {isDone ? '✓' : '○'}
        </span>
      )}
      <span className="calendar-node-text">{node.text || 'Sin título'}</span>
    </button>
  )
}

export default function CalendarView() {
  const navigate = useNavigate()
  const s = useStore()
  const [weekStart, setWeekStart] = useState(() => startOfWeek(new Date()))

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))

  const allNodes = s.allActive().filter(n => !n.deletedAt)

  // Nodes with due dates in this week
  const nodesWithDue = allNodes.filter(n => n.due)

  // Nodes that are tasks (have status) but no due date
  const noDateTasks = allNodes.filter(n => n.status !== null && !n.due)

  function getNodesForDay(day: Date): Node[] {
    return nodesWithDue.filter(n => {
      if (!n.due) return false
      const due = new Date(n.due)
      return isSameDay(due, day)
    })
  }

  function goToToday() {
    setWeekStart(startOfWeek(new Date()))
  }

  function goToPrevWeek() {
    setWeekStart(d => addDays(d, -7))
  }

  function goToNextWeek() {
    setWeekStart(d => addDays(d, 7))
  }

  const weekLabel = `${formatDate(weekStart)} — ${formatDate(days[6])}`

  return (
    <div className="view calendar-view">
      <div className="view-header">
        <h1 className="view-title">Calendario</h1>
        <div className="calendar-week-nav">
          <button className="btn-secondary calendar-nav-btn" onClick={goToPrevWeek}>‹</button>
          <span className="calendar-week-label">{weekLabel}</span>
          <button className="btn-secondary calendar-nav-btn" onClick={goToNextWeek}>›</button>
          <button className="btn-secondary" onClick={goToToday}>Hoy</button>
        </div>
      </div>

      <div className="view-body">
        <div className="calendar-grid">
          {days.map((day, i) => {
            const isToday = isSameDay(day, today)
            const dayNodes = getNodesForDay(day)
            return (
              <div
                key={i}
                className={`calendar-day-cell ${isToday ? 'calendar-day-cell--today' : ''}`}
              >
                <div className="calendar-day-header">
                  <span className="calendar-day-name">{DAY_NAMES[i]}</span>
                  <span className="calendar-day-number">{day.getDate()}</span>
                </div>
                <div className="calendar-day-nodes">
                  {dayNodes.map(node => (
                    <NodeChip
                      key={node.id}
                      node={node}
                      onClick={() => navigate(`/node/${node.id}`)}
                    />
                  ))}
                  {dayNodes.length === 0 && (
                    <span className="calendar-day-empty">—</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {noDateTasks.length > 0 && (
          <div className="calendar-nodate-section">
            <h3 className="calendar-nodate-title">Sin fecha</h3>
            <div className="calendar-nodate-chips">
              {noDateTasks.map(node => (
                <NodeChip
                  key={node.id}
                  node={node}
                  onClick={() => navigate(`/node/${node.id}`)}
                  compact
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
