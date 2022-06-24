
import{BrowserRouter as Router,Route,Switch}from"react-router-dom"
import First from "./page/first";
import Second from "./page/Second";
import Third from "./page/Thirdpage";
import Fourth from "./page/fourth";
import Fifth from "./page/fifth";

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/" exact component={First}/>
        <Route path="/first/" exact component={First}/>
        
        <Route path="/second/:login" exact component= {Second}/>
        <Route path="/third/" exact component= {Third}/>
        <Route path="/fourth/" exact component= {Fourth}/>
        <Route path="/fifth/" exact component= {Fifth}/>

        
   </Switch>
   </Router>
    </div>
  );
}
export default App;




































/*//import logo from './logo.svg';
import './App.css';
//import Learning from './Learning'

function App() {
  return (
    <div className="App">
      <Learning/>
    </div>
  );
}

export default App; */
