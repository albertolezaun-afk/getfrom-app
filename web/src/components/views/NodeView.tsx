import { useParams, useNavigate } from 'react-router-dom'
import { useStore, store } from '../../store/nodeStore'
import Outliner from '../outliner/Outliner'

export default function NodeView() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const s = useStore()
  const node = id ? s.getNode(id) : undefined

  if (!node || node.deletedAt) {
    return <div className="view-empty">Nodo no encontrado</div>
  }

  // Breadcrumb: walk up the parent chain
  const crumbs: { id: string; text: string }[] = []
  let cur = node
  while (cur.parentId) {
    const parent = s.getNode(cur.parentId)
    if (!parent) break
    crumbs.unshift({ id: parent.id, text: parent.text || 'Sin título' })
    cur = parent
  }

  function handleTitleInput(e: React.FormEvent<HTMLHeadingElement>) {
    const text = e.currentTarget.textContent || ''
    store.updateNode(node!.id, { text })
  }

  return (
    <div className="view node-view">
      <div className="view-header">
        {crumbs.length > 0 && (
          <nav className="breadcrumb">
            <button className="breadcrumb-home" onClick={() => navigate('/')}>Inicio</button>
            {crumbs.map((c, i) => (
              <span key={c.id}>
                <span className="breadcrumb-sep">/</span>
                <button
                  className="breadcrumb-item"
                  onClick={() => navigate(`/node/${c.id}`)}
                >
                  {c.text || 'Sin título'}
                </button>
              </span>
            ))}
          </nav>
        )}

        <h1
          className="node-title"
          contentEditable
          suppressContentEditableWarning
          onInput={handleTitleInput}
          onBlur={handleTitleInput}
        >
          {node.text || 'Sin título'}
        </h1>

        {node.status !== null && (
          <div className={`node-status-badge ${node.status}`}>
            {node.status === 'pending' ? 'Pendiente' : 'Completado'}
          </div>
        )}
      </div>

      <div className="view-body">
        <Outliner
          parentId={node.id}
          autoFocusEmpty
          placeholder="Añade contenido..."
        />
      </div>
    </div>
  )
}
