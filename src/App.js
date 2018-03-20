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

  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.handleScroll)
  }

  constructor(){
    super()
  
    this.state = {
      create: false,
      login: false,
      register: false,
      story: true,
      user: false,
      about: false,
      login: false,
    }

    this.toggleHome = this.toggleHome.bind(this)
    this.toggleCreate = this.toggleCreate.bind(this)
    this.toggleAbout = this.toggleAbout.bind(this)
    this.toggleLogin = this.toggleLogin.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
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
        story: !story
    })
  }

  toggleAbout = () => {
    document.querySelector("#create").style.display = "none";
    const about = this.about;
    this.setState({
        about: !about
    })
  }

  toggleLogin = () => {
    document.querySelector("#create").style.display = "none";
    const login = this.login;
    this.setState({
        login: !login
    })
  }

  handleScroll = () => {
    let tree1 = document.querySelector(".tree1");
    tree1.style.margin = -(window.pageYOffset*1.75) + 'px ' + -(window.pageYOffset*.75) + 'px';

    let tree2 = document.querySelector(".tree2");
    tree2.style.margin = -(window.pageYOffset*1.5) + 'px ' + (window.pageYOffset*.15) + 'px';
  }

  render() {
    return (
      <div className="App">
        <style>
          @import url('https://fonts.googleapis.com/css?family=Dosis|Londrina+Outline|Londrina+Solid');
        </style>
        <h1 className="title">Afya <span className="thin">Bars</span></h1>
        <nav>
          <button className="home-nav" onClick={this.toggleHome}>home</button>
          <button className="home-nav" onClick={this.toggleCreate}>create</button>
          <button className="home-nav" onClick={this.toggleAbout}>about</button>
          <button className="home-nav" onClick={this.toggleLogin}>login</button>
        </nav>
        {this.state.create && <Create/>}
        {this.state.login && <Login/>}
        {this.state.register && <Register/>}
        {this.state.story && <Story/>}
        {this.state.user && <User/>}

        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
        <h1>dummy</h1>
      </div>
    );
  }
}

export default App;
