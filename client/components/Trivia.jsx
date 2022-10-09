import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { thunkTrivia } from '../actions/triviaAction'


function Trivia() {
    const trivia = useSelector((store) => store.trivia)
    const dispatch = useDispatch()
    console.log(trivia.category, 'from home component')

    useEffect(() => {
        dispatch(thunkTrivia())
    },[])
  return (
    <>
      <section className="main">
        <p>hello</p>
      </section>
    </>
  )
}

export default Trivia