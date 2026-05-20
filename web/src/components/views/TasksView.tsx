import { useNavigate } from 'react-router-dom'
import { useStore, store } from '../../store/nodeStore'

export default function TasksView() {
  const s = useStore()
  const navigate = useNavigate()
  const tasks = s.pendingTasks()

  function toggleDone(id: string) {
    store.updateNode(id, { status: 'done' })
  }

  if (tasks.length === 0) {
    return (
      <div className="view tasks-view">
        <div className="view-header">
          <h1 className="view-title">Tareas</h1>
        </div>
        <div className="view-empty-state">
          <p>No hay tareas pendientes 🎉</p>
        </div>
      </div>
    )
  }

  return (
    <div className="view tasks-view">
      <div className="view-header">
        <h1 className="view-title">Tareas</h1>
        <span className="tasks-count">{tasks.length} pendiente{tasks.length !== 1 ? 's' : ''}</span>
      </div>

      <div className="view-body">
        <div className="task-list">
          {tasks.map(task => (
            <div key={task.id} className="task-item">
              <button
                className="task-check"
                onClick={() => toggleDone(task.id)}
                aria-label="Completar"
              >
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </button>

              <div className="task-info" onClick={() => navigate(`/node/${task.id}`)}>
                <span className="task-text">{task.text}</span>
                {task.due && (
                  <span className={`task-due ${new Date(task.due) < new Date() ? 'overdue' : ''}`}>
                    {new Date(task.due).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
