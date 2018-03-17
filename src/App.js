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
      create: true,
      login: false,
      register: false,
      story: false, 
      user: false,
    }

    this.toggleHome = this.toggleHome.bind(this)
    this.toggleCreate = this.toggleCreate.bind(this
      )
  }

  toggleCreate = () => {
    document.querySelector("#story").style.display = "none";
    const create = this.create;
    this.setState({
        create: !create
    })
  }

  toggleHome = () => {
    document.querySelector("#create").style.display = "none";
    const story = this.story;
    this.setState({
        story: true
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">afya <span className="thick">bars</span></h1>
        <style>
          @import url('https://fonts.googleapis.com/css?family=Dosis|Londrina+Outline|Londrina+Solid');
        </style>
        {this.state.create && <Create/>}
        {this.state.login && <Login/>}
        {this.state.register && <Register/>}
        {this.state.story && <Story/>}
        {this.state.user && <User/>}
      </div>
    );
  }
}

export default App;
