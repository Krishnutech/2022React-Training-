import { ADD, SUBTRACT,MULTIPLY,DIVISION,RESET } from '../Constants.js'
const add = () => {
  return  {type: ADD}

}
const subtract = () => {
    return  {type: SUBTRACT}
  }
  const multiply = () => {
    return  {type: MULTIPLY}
  }
  const division = () => {
    return  {type: DIVISION}
  }
  const reset = () => {
    return  {type: RESET}
  }