import { Routes, Route} from 'react-router-dom'
import { Home } from './routes/Home'
import { Success } from './routes/Success'

export function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/success' element={<Success />} />
    </Routes>
  )
}
