import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../store/nodeStore'

export default function SearchView() {
  const s = useStore()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return s.allActive()
      .filter(n => n.text.toLowerCase().includes(q) || (n.body || '').toLowerCase().includes(q))
      .slice(0, 50)
  }, [query, s])

  return (
    <div className="view search-view">
      <div className="view-header">
        <div className="search-bar">
          <svg width="16" height="16" viewBox="0 0 16 16" className="search-icon">
            <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Buscar notas..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
          />
          {query && (
            <button className="search-clear" onClick={() => setQuery('')}>×</button>
          )}
        </div>
      </div>

      <div className="view-body">
        {query && results.length === 0 && (
          <div className="view-empty">Sin resultados para "{query}"</div>
        )}
        {results.map(node => (
          <div
            key={node.id}
            className="search-result"
            onClick={() => navigate(`/node/${node.id}`)}
          >
            <span className="result-text">{highlight(node.text, query)}</span>
            {node.status !== null && (
              <span className={`result-badge ${node.status}`}>
                {node.status === 'pending' ? '○' : '✓'}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function highlight(text: string, query: string): React.ReactNode {
  if (!query) return text
  const parts = text.split(new RegExp(`(${escapeRegex(query)})`, 'gi'))
  return parts.map((p, i) =>
    p.toLowerCase() === query.toLowerCase()
      ? <mark key={i}>{p}</mark>
      : p
  )
}

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
