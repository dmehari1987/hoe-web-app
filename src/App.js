import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/navbar"
import Footer from "./components/layouts/footer"
import Home from "./components/pages/home";
import AboutUs from "./components/pages/aboutUs";
import ContactUs from "./components/pages/contactUs";
import Details from "./components/pages/details";
import SignUp from "./components/pages/signUp";
import Login from "./components/pages/login";
import NotFoundPage from "./components/pages/notFoundPage";
import './App.css';

class App extends Component {
  render() { 
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/aboutus" component={ AboutUs }/>
          <Route path="/contactus" component={ ContactUs }/>
          <Route path= "/signup" component= { SignUp} />
          <Route path="/login" component={ Login }/>
          <Route path="/details" component={ Details }/>
          <Route component={ NotFoundPage }/>
        </Switch>
        <Footer />
      </div>
    )
  }
}
 

export default App;
