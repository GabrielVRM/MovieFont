import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { MovieCreate } from '../pages/MovieCreate'
import { MoviePreview } from '../pages/MoviePreview'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path='/MovieCreate' element={<MovieCreate />} />
      <Route
        path='/MoviePreview/:user_id/:id_note'
        element={<MoviePreview />}
      />
    </Routes>
  )
}
