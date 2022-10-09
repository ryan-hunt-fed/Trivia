import {SHOW_TRIVIA} from '../actions/triviaAction'

const initalState = []

export default function triviaRedu (state = initalState, action) {
    const { type, payload } = action
    switch(type) {
        case SHOW_TRIVIA:
            return  payload

        default: return state
    }
}