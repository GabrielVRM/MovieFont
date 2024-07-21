import { Container } from './style'
import { Tag } from '../Tags'
import { IoStar } from 'react-icons/io5'
import { IoStarOutline } from 'react-icons/io5'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hook/auth'

export function Films({ search }) {
  const navigate = useNavigate()
  const [data, setData] = useState({ moviesUser: [] }) // Garantir que moviesUser seja sempre um array
  const [filteredMovies, setFilteredMovies] = useState([])

  const { user } = useAuth()

  console.log(user)

  async function handleDetailsMovie(user_id, movie_id) {
    navigate(`MoviePreview/${user_id}/${movie_id}`)
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`movie/${user.id}`)
      setData(response.data)
    }
    fetchMovies()
  }, [user.id])

  useEffect(() => {
    const filtered = data.moviesUser.filter((movie) =>
      movie.name.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredMovies(filtered)
  }, [data.moviesUser, search])

  return (
    <>
      {filteredMovies.map((m, i) => {
        const stars = []
        for (let j = 0; j < 5; j++) {
          if (j < m.note_movie) {
            stars.push(<IoStar key={j} size={12} />)
          } else {
            stars.push(<IoStarOutline key={j} size={12} />)
          }
        }
        return (
          <Container
            key={i}
            onClick={() => handleDetailsMovie(m.user_id, m.id)}
          >
            <h1>{m.name}</h1>
            <div>{stars}</div>
            <p>{m.description}</p>
            <div className='tag'>
              <Tag title={m.tag_name} />
            </div>
          </Container>
        )
      })}
    </>
  )
}
