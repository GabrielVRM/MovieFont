import { Routes, Route, Navigate } from 'react-router-dom'

import { SingIn } from '../pages/auth/SignIn'
import { SingUp } from '../pages/auth/SingUp'

export function AuthRoutes() {
  const user = localStorage.getItem('user')
  return (
    <Routes>
      <Route path='/' element={<SingIn />} />
      <Route path='/Register' element={<SingUp />} />
      {!user && <Route path='*' element={<Navigate to={'/'} />} />}
    </Routes>
  )
}
