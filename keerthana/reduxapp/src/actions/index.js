import { ADD, SUBTRACT,RESET, MULTIPLY } from '../Constants.js'
const add = () => {
  return  {type: ADD}

}
const subtract = () => {
    return  {type: SUBTRACT}
  
  }
  const mul = () => {
    return  {type:MULTIPLY}
  
  }
  const reset = () => {
    return  {type:RESET}
  
  }