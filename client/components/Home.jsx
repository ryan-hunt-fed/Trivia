import React from 'react'
import { Link } from 'react-router-dom'





function Home() {
   
  return (
    <>
      <section className="main">
        <h1 className='main-header'>Trivia Night!!</h1>
       <p className='description'>Welcome to Trivia Night, a load of questions from the OpenTDB API. Lets begin by hitting the button below!!</p>
       <Link to='/trivia'>
       <button className='start'>Start Game</button>
       </Link>
       
       
      </section>
    </>
  )
}

export default Home