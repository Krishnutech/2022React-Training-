import {ADD,SUB,RESET} from './constants.js'
const addition = () => {
    return {type:ADD}
}
const subraction = () => {
    return {type:SUB}
}
const reset = () =>{
    return {type:RESET}
}
export{
    addition, subraction,reset
}
