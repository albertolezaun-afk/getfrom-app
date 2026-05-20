import { useStore } from '../../store/nodeStore'
import Outliner from '../outliner/Outliner'

export default function DiaryView() {
  const s = useStore()
  const diary = s.todayDiary()

  if (s.isSyncing && !diary) {
    return <div className="view-loading">Cargando...</div>
  }

  if (!diary) {
    return <div className="view-empty">No hay entrada para hoy</div>
  }

  const date = new Date()
  const dayName = date.toLocaleDateString('es-ES', { weekday: 'long' })
  const dateStr = date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <div className="view diary-view">
      <div className="view-header">
        <div className="diary-date">
          <span className="diary-day">{dayName.charAt(0).toUpperCase() + dayName.slice(1)}</span>
          <span className="diary-full-date">{dateStr}</span>
        </div>
      </div>

      <div className="view-body">
        <Outliner
          parentId={diary.id}
          autoFocusEmpty
          placeholder="Escribe lo que está en tu mente..."
          className="diary-outliner"
        />
      </div>
    </div>
  )
}
