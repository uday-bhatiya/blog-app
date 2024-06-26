import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home, About ,Signin, Signup, Dashboard, Project} from "./pages"
import { Header, Footer } from "./components" 

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/sign-in' element={<Signin/>} />
      <Route path='/sign-up' element={<Signup/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/project' element={<Project/>} />
    </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
