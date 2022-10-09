import React from 'react'
import { Link } from 'react-router-dom'





function Home() {
   
  return (
    <>
      <section className="main">
        <h1>Trivia Night!!</h1>
       <p>hello world</p>
       <Link to='/trivia'>
       <button>Start Game</button>
       </Link>
       
       
      </section>
    </>
  )
}

export default Home