import { Header } from '../../components/Header'
import { FaArrowLeft } from 'react-icons/fa'
import { TfiControlShuffle, TfiTimer } from 'react-icons/tfi'
import { IoStar, IoStarOutline } from 'react-icons/io5'
import { Link } from '../../components/Link'
import { Container } from './style'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import Swal from 'sweetalert2'

export function MoviePreview() {
  const [data, setData] = useState([])
  const [user, setUser] = useState([])

  const navigate = useNavigate()

  const params = useParams()

  async function handleRemoveMovies() {
    try {
      const response = await api.delete(
        `movie/${params.user_id}/${params.id_note}`
      )
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Parabens seu filme foi deletado! 😭👀',
        showConfirmButton: false,
        timer: 1500,
      })
      navigate('/')
    } catch (error) {
      if (error.response) {
        alert(error.response.mesage)
      } else {
        alert('Não foi possivel deletar ❌')
      }
    }
  }

  useEffect(() => {
    async function getUser() {
      const responseUser = await api.get(`user/${params.user_id}`)
      setUser(responseUser.data.user)
    }

    getUser()
  }, [])

  useEffect(() => {
    async function getMovies() {
      const response = await api.get(
        `movie/${params.user_id}/${params.id_note}`
      )
      setData(response.data.moviesUser)
    }

    getMovies()
  }, [])

  const stars = []

  for (let i = 0; i < 5; i++) {
    if (i < data.note_movie) {
      stars.push(<IoStar key={i} size={12} />)
    } else {
      stars.push(<IoStarOutline key={i} size={12} />)
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Link path={'/'} icon={FaArrowLeft} />
        <div>
          <h1>{data.name}</h1>
          <div>{stars}</div>
          <div className='tag'>
            <span>{data.tag_name}</span>
          </div>
        </div>
        <div className='paragraph'>
          <img src={user.avatar} alt='Author' />
          <p>por &nbsp;{user.name}</p>
          <span>
            <TfiTimer />
            &nbsp; {data.created_at}
          </span>
        </div>
        <div>
          <p>{data.description}</p>
        </div>
        <Button
          className='btn'
          title={'Excluir Filmes'}
          onClick={handleRemoveMovies}
        />
      </Container>
    </>
  )
}
