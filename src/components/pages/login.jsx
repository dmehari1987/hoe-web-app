import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
// import Input from '../common/input';

class Login extends Component {
	state = {
		account: { username: '', password: '' },
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submitted');
	};

	handleChange = ({ currentTarget: input }) => {
		const account = { ...this.state.account.username };
		account[input.name] = input.value;
		this.setState({ account });
	};

	render() {
		const { account } = this.state;
		return (
			<Form onClick={this.handleSubmit} className="login-form">
				<Label>Email</Label>
                <Input 
                    onChange={this.handleChange} 
                    value={account.username} 
                    id= "username"
                    type= "email"
                    placeholder= "username@example.com" />
				<Label>Password</Label>
                <Input 
                    onChange={this.handleChange} 
                    value={account.password} 
                    id= "password"
                    type= "password"
                    placeholder= "password" />
				
				<Button className="btn-block btn-dark btn-lg ">Log in</Button>
				<div className="text-center pt-3">Or continue with social account</div>
				<FacebookLoginButton className="p-3" />
				<GoogleLoginButton />
				<div className="text-center">
					<Link to="/signup">Sign Up</Link>
					<span className="p-2">|</span>
					<Link to="/register">Forgot Password</Link>
				</div>
			</Form>
		);
	}
}

export default Login;
