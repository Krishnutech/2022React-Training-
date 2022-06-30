import './App.css';
import {ADD ,SUBTRACT,MULTIPLY,DIVISION,RESET}from './Constants'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const state = useSelector(state=>state)
  const dispatch=useDispatch()
  return (
    <div className="App">
      Counter:{state.count}<br/>
      <button onClick={() =>dispatch({type:ADD})}>ADD</button><br/>
      <button onClick={() =>dispatch({type:SUBTRACT})}>SUB</button><br/>
      <button onClick={() =>dispatch({type:MULTIPLY})}>MUL</button><br/>
      <button onClick={() =>dispatch({type:DIVISION})}>DIV</button><br/>
      <h3><button onClick={() =>dispatch({type:RESET})}>RESET</button><br/></h3>
      <h1>Count : {state.count}</h1>
    </div>
    
  );
}

export default App;


