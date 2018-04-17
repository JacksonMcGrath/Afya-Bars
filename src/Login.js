import React, {Component} from 'react';

class Login extends Component {
	constructor(){
		super()
	
		this.state = {
	
		}
	}

	render(){

		return (
			<div className="login">
				<div className="login-buffer"></div>
				<form className="login-panel">
					<h3 className="login-label">Username:</h3>
					<input type="text" name="username" className="login-input"></input>
					<h3>Password:</h3>
					<input type="text" name="password" className="login-input"></input>
				</form>
				<div className="login-button-container">
					<button className="login-button">Login</button>
					<button className="login-button">Create Account</button>
				</div>
			</div>
		)
	}
}



export default Login;