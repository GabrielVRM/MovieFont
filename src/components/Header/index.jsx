import { Container } from './style'
import RocketImage from '../../assets/RocketMovies.png'
import { Input } from '../Input'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Link } from 'react-router-dom'
import { useAuth } from '../../hook/auth'
import { api } from '../../services/api'
export function Header({ setSearch }) {
  const { handleLogout, user } = useAuth()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}files/${user.avatar}`
    : avatarPlaceholder

  return (
    <>
      <Container>
        <img className='logo' src={RocketImage}></img>

        <Input
          placeholder='Pesquisar pelo título'
          type='text'
          onChange={(e) => setSearch(e.target.value)}
        />

        <div>
          <p>{user.name}</p>
          <Link to='/' onClick={handleLogout}>
            sair
          </Link>
        </div>
        <Link to={'/profile'}>
          <img className=' avatar' src={avatarUrl} />
        </Link>
      </Container>
    </>
  )
}
