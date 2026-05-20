import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { forgotPassword } from '../../api/client'

export default function ForgotPasswordPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await forgotPassword(email)
      setSuccess(true)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error desconocido'
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="22" fill="#8b5cf6"/>
            <text x="50" y="68" textAnchor="middle" fontSize="52" fontWeight="700" fill="white" fontFamily="Inter, sans-serif">F</text>
          </svg>
          <span>From</span>
        </div>

        <h1>Recuperar contraseña</h1>
        <p className="auth-subtitle">Te enviaremos un enlace para restablecer tu contraseña.</p>

        {success ? (
          <div className="auth-success">
            Revisa tu email para el enlace de recuperación.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="tu@email.com"
                autoComplete="email"
                required
              />
            </div>

            {error && <div className="auth-error">{error}</div>}

            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar enlace'}
            </button>
          </form>
        )}

        <p className="auth-toggle">
          <button
            type="button"
            className="link-btn"
            onClick={() => navigate('/login')}
          >
            Volver al inicio de sesión
          </button>
        </p>
      </div>
    </div>
  )
}
