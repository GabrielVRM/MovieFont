import { Container, Form, SingInContent, SingInImage } from './style.js'

import Swal from 'sweetalert2'

import { Button } from '../../../components/Button/index.jsx'
import { FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../../components/Input/index.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../../services/api.js'

export function SingUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleAuth() {
    api
      .post('user', { name, email, password })
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Parabens seu cadastro foi realizado 🚀😁',
          showConfirmButton: false,
          timer: 1500,
        })
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          Swal.fire({
            title: 'Error!',
            text: `${error.response.data.message} 🥶❌`,
            icon: 'error',
          })
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Não foi Possivel cadastrar',
            icon: 'error',
          })
        }
      })
  }

  return (
    <>
      <Container>
        <SingInContent>
          <Form>
            <h1>MaximoMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>

            <h2>Crie sua conta</h2>
            <Input
              placeholder='nome'
              type='text'
              onChange={(e) => setName(e.target.value)}
              icon={FiLock}
            />

            <Input
              placeholder='E-mail'
              type='text'
              onChange={(e) => setEmail(e.target.value)}
              icon={FiMail}
            />

            <Input
              placeholder='Senha'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              icon={FiLock}
            />

            <Button title='Cadastrar' onClick={handleAuth} />
          </Form>
          <Link to='/'> Voltar para o login</Link>
        </SingInContent>

        <SingInImage></SingInImage>
      </Container>
    </>
  )
}
