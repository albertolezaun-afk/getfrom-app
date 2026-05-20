export default function AgentsView() {
  return (
    <div className="view agents-view">
      <div className="view-header">
        <h1 className="view-title">Agentes</h1>
      </div>
      <div className="view-body">
        <div className="agents-coming-soon">
          <div className="agents-icon">🤖</div>
          <h2>Agentes IA — Próximamente</h2>
          <p>Los agentes IA de From te permitirán automatizar tareas, procesar notas y ejecutar flujos de trabajo de forma autónoma.</p>
          <ul className="agents-features-list">
            <li>📝 Procesar y resumir notas automáticamente</li>
            <li>✅ Crear y organizar tareas desde texto libre</li>
            <li>🔄 Flujos de trabajo personalizados</li>
            <li>🔌 Integración con Claude Desktop vía MCP</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
