import './App.css';
import {ADD,SUB} from './constants';
import {useSelector,useDispatch} from 'react-redux'


function App() {
  const state =useSelector(state => state)
  const dispatch=useDispatch()
  const addition =() =>{
    dispatch({
      type: ADD
    })
  }
  const subtraction =() =>{
    dispatch({
      type: SUB
    })
  }
  return (
    <div className="App">
      <button onClick={(addition)}> ADD</button>
      <button onClick={(subtraction)}>SUB</button>
      <h1>Count:{state.count}</h1>
    </div>
  )
}

export default App
