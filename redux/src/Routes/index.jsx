import React from 'react'
import Home from '../Container/Home'
import{BrowserRouter,Route,Routes} from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}
