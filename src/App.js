import React, { useState } from 'react';
import './App.css';

function App() {
  const [name,setName] = useState("");  
  const [userName,setUserName] = useState("");  
  const [age,setAge] = useState("");
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,userName,age);
    const date = {name,userName, age};
    if (name && userName && age) {
      setList((ls)=> [...ls,date]);
      setName("");
      setUserName("");
      setAge("");
    }
  };
  return(
    <div className="App">
      <h1>React Todo</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='Name' name='name' value={name} onChange = {(e)=>setName(e.target.value)}/> <br/>
        <input placeholder='Username' name='name' value={userName} onChange = {(e)=> setUserName(e.target.value)}/> <br/>
        <input placeholder='Age' type='number' value={age} onChange = {(e)=> setAge(e.target.value)}/>
        <button>Add</button>
      </form>
      {
        list.map((t)=> <div>
          <li>{t.name}</li>
          <li>{t.userName}</li>
          <li>{t.age}</li>
        </div>)
      }
    </div>
  )
}

export default App;
