import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Reciepes from '../Components/Reciepes'
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/recepies" element={<Reciepes/>} />
    </Routes>
  )
}

export default Routing
