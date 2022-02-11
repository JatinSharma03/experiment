import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

import {useState} from "react";
import ALert from './components/ALert';

function App() {

  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null)

  const toggleMode = ()=>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "rgb(51, 51, 51)";
      buildAlert("Dark Mode Has Been Eabled" , "success");
    }
    else if(mode === "dark"){
      setmode("light");
      document.body.style.backgroundColor = "white";
      buildAlert("Light Mode Has Been Eabled" , "success");
    }
  }

  const buildAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }
  
  return (
    <>
      <Navbar title="Navbar" mode={mode} toggleMode = {toggleMode}/> 

      <ALert alert={alert}/>

      <div className="container my-3">
        <Textform heading="Enter the Text to Analyse" mode = {mode} buildAlert={buildAlert}/>
        <About mode = {mode}/>
      </div>
    </>
  );
}

export default App;
