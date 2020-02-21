import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from "axios"

function App() {
  const [inputValues, setInputValues] = useState({
    username: '', password: ''
  });
  
  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const login = ()=>{
    axios.post("/api/users/signup", inputValues).then(response=>console.log(response))
  }
  return (
    <div className="App">
        <input type="text" name="username" onChange={handleOnChange}/>
        <input type="text" name="password" onChange={handleOnChange}/>
        <button onClick={login}/>
    </div>
  );
}

export default App;
