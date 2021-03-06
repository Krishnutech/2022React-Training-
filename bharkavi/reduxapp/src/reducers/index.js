import { createStore } from 'redux'
import {ADD,SUB} from '../constants'
const initialstate ={
    count: 0
}
const reducer=(state= initialstate,action) => { 
    switch(action.type){
      case ADD:
      return {...state, count: state.count+1}
      case SUB:
      return {...state, count: state.count-1}
      default:
       return state
     }
   }
   export const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())