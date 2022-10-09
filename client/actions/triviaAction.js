import {getTriviaDataApi} from '../apis/triviaApi'

const SHOW_TRIVIA = 'SHOW_TRIVIA'

//action
export function showTrivia(data) {
    return {
        type: SHOW_TRIVIA,
        payload: data
    }
}

//action THUNK

export function thunkTrivia(){
    return (dispatch) => {
        return getTriviaDataApi()
        .then((data) => {
            dispatch(showTrivia(data))
        })
    }
}

