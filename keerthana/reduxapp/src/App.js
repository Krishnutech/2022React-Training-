import logo from './logo.svg';
import './App.css';
import {ADD ,SUBTRACT}from './Constants'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const state = useSelector(state=>state)
  const dispatch=useDispatch()
  return (
    <div className="App">
      Counter:{state.count}<br/>
      <button onClick={() =>dispatch({type:ADD})}>ADD</button><br/>
      <button onClick={() =>dispatch({type:SUBTRACT})}>SUB</button><br/>
      <h1>Count : {state.count}</h1>
    </div>
    
  );
}

export default App;