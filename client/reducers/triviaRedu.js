import { SHOW_TRIVIA } from '../actions/triviaAction'

export default function reducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case SHOW_TRIVIA:
      return payload
    default:
      return state
  }
}

