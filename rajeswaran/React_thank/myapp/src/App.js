import './App.css'
import { ADD,SUB } from './constant';
import {Provider,useSelector,useDispatch} from 'react-redux';

function App(){
    const state=useSelector(state=>state)
    const dispatch=useDispatch()
    const add=()=>{
        dispatch({
            type:ADD
        })
    }
    const subtraction=()=>{
        dispatch({
            type:SUB
        })
    }
    return(
        <div className="App">
           <button onClick={add}>Add</button>
           <button onClick={subtraction}>SUBTRACT</button>
           <h1>Count:{state.count}</h1>
        </div> 
    )
}

export default App;
