import React from 'react'
import './Header.css';
import logo from '../assets/holberton-logo.jpg';

const Header = () => {
  return (
    <div>
        <div className="App-header">
          <div><img src={logo} alt="logo" /></div>
          <div><h1>School dashboard</h1></div>
      </div>
    </div>
  )
}

export default Header