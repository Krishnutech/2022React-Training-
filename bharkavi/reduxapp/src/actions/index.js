import {ADD,SUB} from './constants'
const addition=() =>{
    return{type: ADD}  
}
const subtraction=() =>{
    return{type: SUB}
}
export{
    addition,
    subtraction
}