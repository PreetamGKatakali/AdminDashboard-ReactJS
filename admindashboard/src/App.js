import logo from './logo.svg';
import './App.css';
import Parent from './Components/Parent';
import { useState } from 'react';

function App() {
  const [toggle,settoggle]=useState(false)
  const handlechange=(event)=>{
    if(event.target.checked){
      settoggle(true)
    }
    else{
      settoggle(false)
    }
  }
  return (
    <div className="App" id={toggle?"light":"dark"}>
      <Parent change={handlechange}/>
    </div>
  );
}

export default App;
