import React from 'react';
import logo from "../assets/holberton-logo.jpg"
import "./Header.css"
const Header = () => {
    return (
    <div className="Header">
     <div className="App-header" >
      <img src={logo} alt="holberton-logo" />
      <h1>School dashboard </h1>
    </div>
    </div>);
}
 
export default Header;