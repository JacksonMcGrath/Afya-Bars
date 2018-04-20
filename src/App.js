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

// --- FIREBASE ---
import {firebaseApp} from './firebase.js'

class App extends Component {

  constructor(){
    super()
  
    this.state = {
      render: 'story',
      loggedIn: false,
    }

    this.toggleCreate = this.toggleCreate.bind(this)
    this.toggleAbout = this.toggleAbout.bind(this)
    this.toggleStory = this.toggleStory.bind(this)
    this.toggleLogin = this.toggleLogin.bind(this)
  }

  componentDidMount = () => {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('app auth switch on');
        this.setState({
          render: 'story',
          loggedIn: true
        })
        // console.log('the .userInfo: ', firebaseApp.userInfo);
      } else {
        console.log('app auth switch off');
          this.setState({
            loggedIn: false,
          })
      }
    })
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
        {this.state.loggedIn}
        <nav>
          <button className="home-nav" onClick={this.toggleStory}>home</button>
          <button className="home-nav" onClick={this.toggleCreate}>create</button>
          <button className="home-nav" onClick={this.toggleAbout}>about</button>
          {this.state.loggedIn == false && <button className="home-nav" onClick={this.toggleLogin}>login</button>}
          {this.state.loggedIn == true && <button className="home-nav small-nav" onClick={this.toggleLogin}>logged in</button>}
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
