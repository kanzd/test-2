import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Components/Home/index";
import Project from "./Components/Project/index";
function App() {
  return (
    <>
    <BrowserRouter>
     
      <Route exact path = "/project/:id/:name" render={(props)=>(<Project {...props}></Project>)}>
    
      </Route>
     
      <Route exact path="/">
      <Home></Home>
      </Route>
    </BrowserRouter>
  </>
  );
}

export default App;
