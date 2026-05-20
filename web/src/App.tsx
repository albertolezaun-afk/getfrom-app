import { Routes, Route, Navigate } from 'react-router-dom'
import { getToken } from './api/client'
import AuthPage from './components/auth/AuthPage'
import MainLayout from './components/layout/MainLayout'

function PrivateRoute({ children }: { children: React.ReactNode }) {
  return getToken() ? <>{children}</> : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage />} />
      <Route path="/*" element={
        <PrivateRoute>
          <MainLayout />
        </PrivateRoute>
      } />
    </Routes>
  )
}
