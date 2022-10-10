import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { thunkTrivia } from '../actions/triviaAction'


//TODO
//Add waiting/loading gif
//Get questions to appear randomly on buttons
//Toggele class for right or wrong choice
//Display right answer on text below 
//Add score counter, will require how next questions are done currently to change
//Add time bar

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

    function refreshPage(){
        window.location.reload();
    } 

    function correctHandler(evt){
        evt.target.classList.add('correct')
        evt.target.classList.remove('normal-answers')
    }

    function wrongHandler(evt){
        evt.target.classList.add('wrong')
        evt.target.classList.remove('normal-answers')
    }

  return (
    <>
      <section className="question-container">
       
        <p className='category'>{trivia[0]?.category}</p>
        <p className='question'>{trivia[0]?.question}</p>
        <div className='timebar'  >
            <div></div>
        </div>
        <div className='answers'>
            <button onClick={wrongHandler} className='normal-answers'>{trivia[0]?.incorrect_answers[0]}</button>
            {trivia[0]?.incorrect_answers[1] === undefined ? <></> :  <button onClick={wrongHandler} className='normal-answers'>{trivia[0]?.incorrect_answers[1]}</button>}
            {trivia[0]?.incorrect_answers[2] === undefined ? <></> :  <button onClick={wrongHandler} className='normal-answers'>{trivia[0]?.incorrect_answers[2]}</button>}
            <button onClick={correctHandler} className='normal-answers'>{trivia[0]?.correct_answer}</button>
        </div>
        <p>The Answer is: </p>
      </section>
      <br />
        <div>
            <button className='return' onClick={refreshPage}>Next Question</button>
            <Link to='/'>
                <button className='return'>Return Home</button>
            </Link>
        </div>
    </>
  )
}

export default Trivia