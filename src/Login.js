import React, {Component} from 'react';
import { firebaseApp } from './firebase';

class Login extends Component {

	constructor(props){
		super(props)
	
		this.state = {
			email: '',
			password: '',
			error: {
				message: ''
			}
		}

		this.onSignUp = this.onSignUp.bind(this);
		this.onSignIn = this.onSignIn.bind(this);
	}

	onSignUp = () => {
		console.log('this.state ' , this.state);
		const {email, password} = this.state;
		firebaseApp.auth().createUserWithEmailAndPassword(email, password)
			.catch(error => {
				this.setState({error})
			})
	}

	onSignIn = () => {
		console.log('this.state ' , this.state);
		const {email, password} = this.state;
		firebaseApp.auth().signInWithEmailAndPassword(email, password)
			.catch(error => {
				this.setState({error})
			})
	}

	render(){

		return (
			<div className="login">
				<div className="login-buffer"></div>
				<form className="login-panel">
					<h3 className="login-label">Email:</h3>
					<input 
						type="text" 
						name="email" 
						placeholder="email" 
						className="login-input"
						onChange= {event => this.setState({email: event.target.value})}
					/>
					<h3>Password:</h3>
					<input 
						type="password" 
						name="password" 
						placeholder="password" 
						className="login-input"
						onChange= {event => this.setState({password: event.target.value})}
					/>
				</form>
				<div className="login-button-container">
					<button className="login-button" onClick={this.onSignIn}>Login</button>
					<button className="login-button" onClick={this.onSignUp}>Create Account</button>
				</div>
				<div>{this.state.error.message}</div>
			</div>
		)
	}
}



export default Login;