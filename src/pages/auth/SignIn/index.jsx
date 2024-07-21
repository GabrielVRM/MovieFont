import { Container, Form, SingInContent, SingInImage } from './style.js'
import { Link } from 'react-router-dom'

import { Button } from '../../../components/Button/index.jsx'
import { FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../../components/Input/index.jsx'
import { useAuth } from '../../../hook/auth'
import { useState } from 'react'

export function SingIn() {
  const { singIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSingIn() {
    singIn({ email, password })
  }

  return (
    <>
      <Container>
        <SingInContent>
          <Form>
            <h1>MaximoMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>

            <h2>Faça seu login</h2>

            <Input
              placeholder='E-mail'
              type='text'
              icon={FiMail}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder='Senha'
              type='password'
              icon={FiLock}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button title='Entrar' onClick={handleSingIn} />
          </Form>
          <Link to='/register'>Criar Conta </Link>
        </SingInContent>

        <SingInImage></SingInImage>
      </Container>
    </>
  )
}
