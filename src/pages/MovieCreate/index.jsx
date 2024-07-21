import { Header } from '../../components/Header'
import { Link } from '../../components/Link'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FaArrowLeft } from 'react-icons/fa'
import { VscAdd } from 'react-icons/vsc'
import { VscChromeClose } from 'react-icons/vsc'

import { Container } from './style'
import { TextArea } from '../../components/TextArea'
import { useEffect, useState } from 'react'
import { NoteItem } from '../../components/NoteItem'
import { api } from '../../services/api'
import { useAuth } from '../../hook/auth'
import Swal from 'sweetalert2'

export function MovieCreate() {
  const { data } = useAuth()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [noteMovie, setNoteMovie] = useState('')
  const [movie, setMovie] = useState('')
  const [tag, setTag] = useState([])
  const [newtag, setNewTag] = useState('')

  function handleAddTag() {
    setTag((p) => [...p, newtag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTag((p) => p.filter((tag) => tag !== deleted))
  }

  async function handleNewMovies() {
    try {
      await api.post(`movie/${data.user.id}`, {
        name,
        description,
        note_movie: noteMovie,
        nameTag: tag,
      })
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Parabens seu filme foi cadastrado 🚀😁',
        showConfirmButton: false,
        timer: 1500,
      })

      setName('')
      setDescription('')
      setNoteMovie('')
      setTag([])
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('não foi possivel realizar o cadastro do filme')
      }
    }
  }

  return (
    <>
      <Header />

      <Container>
        <Link path={'/'} icon={FaArrowLeft} />
        <h1> Novo Filme</h1>
        <div className='inputs'>
          <Input
            placeholder={'titulo'}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder={'Sua nota (de 0 a 5)'}
            value={noteMovie}
            onChange={(e) => setNoteMovie(e.target.value)}
          />
        </div>
        <TextArea
          placeholder={'Observações'}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <h2>Marcadores</h2>
        <div className='tag'>
          {tag &&
            tag.map((tag, i) => {
              return (
                <NoteItem
                  key={i}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(tag)
                  }}
                />
              )
            })}
          <NoteItem
            title='Novo Marcador'
            icon={VscAdd}
            isNew={true}
            onChange={(e) => setNewTag(e.target.value)}
            value={newtag}
            onClick={handleAddTag}
          />
        </div>
        <div className='buttons'>
          <Button title={'Salvar Alterações'} onClick={handleNewMovies} />
        </div>
      </Container>
    </>
  )
}
