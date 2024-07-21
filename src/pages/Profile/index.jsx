import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from './style.js'
import { Input } from '../../components/Input/index.jsx'
import { Button } from '../../components/Button/index.jsx'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Link } from '../../components/Link/index.jsx'
import { useState } from 'react'
import { useAuth } from '../../hook/auth.jsx'
import { api } from '../../services/api.js'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState('')
  const [password, setPassword] = useState('')

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}files/${user.avatar}`
    : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const user = {
      name,
      email,
      password,
      old_password: passwordOld,
    }
    await updateProfile({ user, avatarFile })
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }
  return (
    <>
      <Container>
        <header>
          <Link icon={FiArrowLeft} path={'/'}></Link>
        </header>
        <Form>
          <Avatar>
            <img src={avatar}></img>

            <label htmlFor='avatar'>
              <FiCamera />
              <input
                id='avatar'
                type='file'
                onChange={handleChangeAvatar}
              ></input>
            </label>
          </Avatar>

          <Input
            placeholder='Nome'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            icon={FiUser}
          />
          <Input
            placeholder='E-mail'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={FiMail}
          />
          <Input
            placeholder='Senha Atual'
            type='password'
            onChange={(e) => setPasswordOld(e.target.value)}
            icon={FiLock}
          />
          <Input
            placeholder='Nova Senha'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            icon={FiLock}
          />

          <Button title={'Salvar'} onClick={handleUpdate} />
        </Form>
      </Container>
    </>
  )
}
