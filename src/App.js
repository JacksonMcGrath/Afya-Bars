import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// --- COMPONENTS ---
import Create from './Create'
import Login from './Login'
import Register from './Register'
import Story from './Story'
import User from './User'
import About from './About'


class App extends Component {

  constructor(){
    super()
  
    this.state = {
      render: 'story',
    }

    this.toggleCreate = this.toggleCreate.bind(this)
    this.toggleAbout = this.toggleAbout.bind(this)
    this.toggleStory = this.toggleStory.bind(this)
    this.toggleLogin = this.toggleLogin.bind(this)
  }

  toggleStory = () => {
    const render = this.state.render
    this.setState({
      render: 'story'
    })
  }

  toggleCreate = () => {
    const render = this.state.render
    this.setState({
      render: 'create'
    })
  }

  toggleAbout = () => {
    const render = this.state.render
    this.setState({
      render: 'about'
    })
  }

  toggleLogin = () => {
    const render = this.state.render
    this.setState({
      render: 'login'
    })
  }

  render() {
    return (
      <div className="App">
        <style>
          @import url('https://fonts.googleapis.com/css?family=Montserrat');
        </style>
        <h1 className="title">Afya <span className="thin">Bars</span></h1>
        <nav>
          <button className="home-nav" onClick={this.toggleStory}>home</button>
          <button className="home-nav" onClick={this.toggleCreate}>create</button>
          <button className="home-nav" onClick={this.toggleAbout}>about</button>
          <button className="home-nav" onClick={this.toggleLogin}>login</button>
        </nav>
        {this.state.render == 'story' && <Story/>}
        {this.state.render == 'create' && <Create/>}
        {this.state.render == 'about' && <About/>}
        {this.state.render == 'login' && <Login/>}
      </div>
    );
  }
}

export default App;
