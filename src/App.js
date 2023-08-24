import React,{useState} from "react"
import './App.css';
import {Login} from "./Log.js"
import {Register} from "./Register"


function App() {
const [currentForm, setCurrentForm]= useState('login');

const toggleForm=(formName)=>{
  setCurrentForm(formName);
}

  return (
    <div>
      {
  currentForm === "login"? <Login onFormSwitch={toggleForm}/> : <Register FormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
