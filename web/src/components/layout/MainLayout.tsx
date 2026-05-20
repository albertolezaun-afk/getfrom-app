import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { store, useStore } from '../../store/nodeStore'
import { clearTokens } from '../../api/client'
import Sidebar from '../sidebar/Sidebar'
import DiaryView from '../views/DiaryView'
import NodeView from '../views/NodeView'
import TasksView from '../views/TasksView'
import SearchView from '../views/SearchView'

export default function MainLayout() {
  const navigate = useNavigate()
  const s = useStore()
  const [loadError, setLoadError] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    store.initialLoad().catch((err: unknown) => {
      const msg = err instanceof Error ? err.message : String(err)
      if (msg === 'UNAUTHORIZED') {
        clearTokens()
        navigate('/login', { replace: true })
      } else {
        setLoadError(msg)
      }
    })
  }, [navigate])

  function handleLogout() {
    clearTokens()
    navigate('/login', { replace: true })
  }

  if (loadError) {
    return (
      <div className="error-screen">
        <p>Error al conectar: {loadError}</p>
        <button onClick={() => window.location.reload()}>Reintentar</button>
      </div>
    )
  }

  return (
    <div className={`main-layout ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Sidebar
        open={sidebarOpen}
        onToggle={() => setSidebarOpen(o => !o)}
        onLogout={handleLogout}
        isSyncing={s.isSyncing}
      />
      <main className="main-content">
        <Routes>
          <Route index element={<DiaryView />} />
          <Route path="tasks" element={<TasksView />} />
          <Route path="search" element={<SearchView />} />
          <Route path="node/:id" element={<NodeView />} />
        </Routes>
      </main>
    </div>
  )
}
