import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// --- COMPONENTS ---
import Create from './Create'
import Login from './Login'
import Register from './Register'
import Story from './Story'
import User from './User'

class App extends Component {
  constructor(){
    super()
  
    this.state = {
      create: false,
      login: false,
      register: false,
      story: false, 
      user: false,
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>UBAR</h1>
          <nav>
            <button className="nav-bar">Create a bar</button>
            <button className="nav-bar">Login</button>
            <button className="nav-bar">Register</button>
            <button className="nav-bar">view your profile</button>
          </nav>
        </header>

        {this.state.create && <Create/>}
        {this.state.login && <Login/>}
        {this.state.register && <Register/>}
        {this.state.story && <story/>}
        {this.state.user && <user/>}
      </div>
    );
  }
}

export default App;
