import { Route, Routes } from 'react-router-dom'
import { DefaultLayouts } from './DefaultLayouts'
import { CompleteOrder } from './pages/CompleteOrder'

import { Home } from './pages/Home'
import { OrdemConfirmed } from './pages/OrdemConfirmed'

export function Router() {
  return (
    <Routes>
        <Route path='/' element={<DefaultLayouts />} >
            <Route path='/' element={<Home />} />
            <Route path='/completeOrder' element={<CompleteOrder />} />
            <Route path="/ordemConfirmed" element={<OrdemConfirmed/>} />
        </Route>
    </Routes>
  )
}