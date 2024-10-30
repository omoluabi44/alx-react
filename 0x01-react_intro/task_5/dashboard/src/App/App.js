import React from "react";
import './App.css';
import logo from "../assets/holberton-logo.jpg"
import {getFullYear, getFooterCopy} from '../utils/utils';


function App() {
  return (
    <div className='App'>
    <div className="App-header" >
      <img src={logo} alt="holberton-logo" />
      <h1>School dashboard </h1>
    </div>

    <div className='App-body'>Login to access the full dashboard </div>
    <form>
    <label htmlFor='email'>Email</label>
    <input type="email" id='email' />
    <label htmlFor='password'>password</label>
    <input type="password" id='password'/>
    <button>Ok</button>
    </form>

    <div className='App-footer'> Copyright {getFooterCopy()} - {getFullYear()}</div>
    </div>
  );
}

export default App;
