import { useContext, createContext, useState, useEffect } from 'react'
import { api } from '../services/api'

import Swal from 'sweetalert2'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function singIn({ email, password }) {
    try {
      const res = await api.post('/session', { email, password })
      const { user, token } = res.data
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))

      api.defaults.headers.authorization = `Bearer ${token}`

      setData({ user, token })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('não foi possivel entrar')
      }
    }
  }

  function handleLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    setData({})
  }

  const id = localStorage.getItem('user')
  const id_get = JSON.parse(id)

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploudForm = new FormData()
        fileUploudForm.append('avatar', avatarFile)

        const res = await api.patch(`user/avatar/${id_get.id}`, fileUploudForm)
        user.avatar = res.data.avatar
      }

      await api.put(`/user/${id_get.id}`, user)

      // localStorage.setItem('user', JSON.stringify(user))

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Parabens seu cadastro foi realizado 🚀😁',
        showConfirmButton: false,
        timer: 1500,
      })
      setData({ user })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('não foi possivel atualizar o perfil')
      }
    }
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`
      setData({
        user: JSON.parse(user),
        token,
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ singIn, data, user: data.user, handleLogout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
