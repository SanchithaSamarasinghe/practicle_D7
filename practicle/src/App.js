import logo from './logo.svg';
import './App.css';
import Child from './Child';
import { useState} from 'react';

function App() {
  const[childname,setchildname]=useState("Default");
  const reciveName=(name)=>{
    setChiledname(name);
  }
  return (
    <div className="App">
    <h2>Hello React I'm Parent</h2>
    <Childcom setfun={receiveName}/>
    <p>Parent:My child said:{childname}</p>
  </div>
  );
}

export default App;
