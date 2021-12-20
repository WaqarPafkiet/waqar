//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from "./Components/Navbar"
import TextForm from "./Components/TextForm"
import Alert from "./Components/Alert"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode2 =()=>{
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor="#2E8B57";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='azure';
    }
  }

  const toggleMode=()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor="#06172e";
      showAlert("Dark mode has been enabled!","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("light mode has been enabled!","success");
    }
  }

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  setTimeout(() => {
    setAlert(null);
  }, 1500);
  
  return (
    <>
    <Router>
      {/* <Navbar title={2} about="About HorseFly"/> */}
      <Navbar title="Horse Fly" about="About" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2}/>
      <Alert Alert={alert}/>
      <div className="container">

      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/" element={<TextForm heading="Enter your text" showAlert={showAlert} mode={mode}/>}/>
      </Routes>
      </div>  
    </Router>
    </>
  );
}

export default App;