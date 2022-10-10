import { getTriviaDataApi } from '../apis/triviaApi'

export const SHOW_TRIVIA = 'SHOW_TRIVIA'

//action
export function showTrivia(data) {
    console.log(data, 'show')
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
            console.log(data, 'from thunk')
            dispatch(showTrivia(data))
        })
    }
}

