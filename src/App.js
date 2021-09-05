import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');  //dark mode enabled or not

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.title = 'TextUtils-Dark Mode';
    }

    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils-Light Mode';
    }
  } 

  return (
    <>
  {/* <Navbar title="TextUtils" aboutText = "About TextUtils"/> */}
  <Router>
  <Navbar title = "TextUtils" mode={mode} toggleMode = {toggleMode}/>
  <div className="container my-3">
    <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm heading = "Enter the text here" mode={mode}/>
            </Route>
    </Switch>
   
    {/* <About/> */}
  </div>
  </Router>
    </>
    
  );
}

export default App;
