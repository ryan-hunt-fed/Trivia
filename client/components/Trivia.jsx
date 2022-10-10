import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { thunkTrivia } from '../actions/triviaAction'




function Trivia() {
    const trivia = useSelector((store) => store.trivia)
    const dispatch = useDispatch()
    console.log(trivia, 'from home component')

    useEffect(() => {
        dispatch(thunkTrivia())
    },[])


   const questions = trivia.map((question) => {
        const formattedQuestion = {
            question: question?.question
            
        }

        const answers = [...question.incorrect_answers]
        formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
        answers.splice(formattedQuestion.answer - 1, 0, question.correct_answer)

        answers.forEach((choice, idx) => {
            formattedQuestion["choice", + (idx + 1)] = choice
        })
        return formattedQuestion

    })
    

    const questionsArr = [trivia[0]?.incorrect_answers[0], trivia[0]?.incorrect_answers[1],trivia[0]?.incorrect_answers[2],trivia[0]?.correct_answer,]

    console.log(questionsArr)
    const answerQuestions = questionsArr[Math.floor(Math.random() * questionsArr.length)]
    console.log(answerQuestions)
    console.log(answerQuestions)
    console.log(answerQuestions)
    console.log(answerQuestions)

  return (
    <>
      <section className="main">
       
        <p>{trivia[0]?.category}</p>
        {/* <p>{questions}</p> */}
        {/* <p>{trivia[0]?.question}</p>
        <button>{trivia[0]?.incorrect_answers[0]}</button>
        <button>{trivia[0]?.incorrect_answers[1]}</button>
        <button>{trivia[0]?.incorrect_answers[2]}</button>
        <button>{trivia[0]?.correct_answer}</button> */}
      </section>
      <br />
        <div>
            <Link to='/'>
                <button>Return Home</button>
            </Link>
        </div>
    </>
  )
}

export default Trivia