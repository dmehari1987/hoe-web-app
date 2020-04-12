import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactUs extends Component {
    render() {
        return (
            <div className= "container text-center mt-5">
                <h4 >Contact Us</h4>
                <div className="row">
                    <div className="col">
                        <form>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="full name" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Email</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.email" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Leave Your Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button className= "btn btn-dark mb-5">Submit</button>
                        </form> 
                    </div>
                    <div className="col my-10 ">
                    <h5>Call Us/Whatsapp</h5>
                    <Link><i className= "fa fa-phone" aria-hidden="true">+249960596324</i></Link>
                    <hr />
                    <h5>Email/Website</h5>
                    <Link><i className= "fa fa-envelope">www@example.com</i></Link><br/>
                    <Link><i className= "fa fa-globe">www.example.com</i></Link>
                    <hr />
                    <h5>Working Hours</h5>
                    <h6>Sunday to Thursday, 7:00am to 5:00pm +2</h6>
                    <hr />
                    <h5>Address</h5>
                    <p>Street: Zelet, Shahafa, Khartoum, Sudan</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ContactUs;
