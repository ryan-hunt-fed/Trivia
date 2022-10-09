import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Trivia from './Trivia'

function App() {
  return (
    <>
      <section className="main">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Trivia' element={<Trivia />}/>
        </Routes>  
      </section>
    </>
  )
}

export default App
