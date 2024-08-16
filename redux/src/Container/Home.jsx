import React from 'react'
import DashBoard from './DashBoard'
import Header from '../Components/Header'
import { Route,Routes } from 'react-router-dom'
import Product from './Product'
import Cart from './Cart'

export default function Home() {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path="/" element={<DashBoard/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/Cart" element={<Cart/>}/>
        </Routes>
    </div>
  )
}
