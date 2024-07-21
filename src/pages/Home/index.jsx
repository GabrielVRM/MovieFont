import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import { VscAdd } from 'react-icons/vsc'

import { Container } from './style'
import { Films } from '../../components/Films'
import { Link } from '../../components/Link'
import { useState } from 'react'

export function Home() {
  const [search, setSearch] = useState('')

  return (
    <>
      <Header setSearch={setSearch} />

      <Container>
        <div className='title'>
          <h1>Meus Filmes</h1>
          <Button
            icon={VscAdd}
            title={''}
            link={<Link title={'Adicionar Filme'} path={'/movieCreate'} />}
          ></Button>
        </div>
        <div className='films'>
          <Films search={search} />
        </div>
      </Container>
    </>
  )
}
