import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import SignUp from './signUp';

class Login extends Component {
    render() {
        return (
            <Form className= "login-form">
                <h1 className= "text-center">Login</h1> 
                <FormGroup>
                    <Label>Email</Label> 
                    <Input type="email" placeholder="email" />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="password" />
                </FormGroup>
                <Button className= "btn-block btn-dark btn-lg " >Log in</Button>
                <div className= "text-center pt-3">Or continue with social account</div>
                <FacebookLoginButton className="p-3" />
                <GoogleLoginButton/>
                <div className= "text-center">
                    <Link to= "/signup">
                        Sign Up
                    </Link>
                    <span className= "p-2">|</span>
                    <Link to= "/register">
                        Forgot Password
                    </Link>
                </div>
            </Form>
        )
    }
}

export  default Login;