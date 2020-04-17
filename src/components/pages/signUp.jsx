import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../App.css";

class SignUp extends Component {
	state = {};
	render() {
		return (
			<div className="container pt-5">
				<div className="row">
					<div className="col-lg-2"></div>
					<div className="col-lg-8">
					<form className="align-center">
					<h3>Student Registration Form</h3>
					<div className="row">
						<div className="col-md-8 col-offset-2">
							<h5>Applicant</h5>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 col-offset-2">
							<input type="text" className="form-control" placeholder="first name" />
						</div>
						<div className="col-md-4">
							<input type="text" className="form-control" placeholder="last name" />
						</div>
					</div>
					<div className="row">
						<div className="col-md-8">
							<h5>Date of Birth</h5>
							<div class="form-group">
								<div class="input-group date" id="datetimepicker1">
									<input type="text" class="form-control" />
									<span class="input-group-addon">
										<span class="glyphicon glyphicon-calendar"></span>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<h5>Gender</h5>
						<div className="col-md-8">
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="gridRadios"
									id="gridRadios1"
									value="option1"
								/>
								<label className="form-check-label" for="gridRadios1">
									Male
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="gridRadios"
									id="gridRadios2"
									value="option2"
								/>
								<label className="form-check-label" for="gridRadios2">
									Female
								</label>
							</div>
						</div>
					</div>
					<hr />
					<div className="row mt-5">
						<div >
							<h4>Parent's Information</h4>
						</div>
					</div>
					<div className="row">
						<div className="col-md-8 col-offset-2">
							<h5>Father's Name</h5>
						</div>
					</div>
					<div className="row">
					<div className="col-md-4 col-offset-2">
							<input type="text" className="form-control" placeholder="first name" />
						</div>
						<div className="col-md-4">
							<input type="text" className="form-control" placeholder="last name" />
						</div>
					</div>
					<div className="row">
						<div className="col-md-8">
							<h5>Father's Qualification</h5>
							<div class="form-group">
								<div class="input-group date" id="datetimepicker1">
									<input type="text" class="form-control" />
									<span class="input-group-addon">
										<span class="glyphicon glyphicon-calendar"></span>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="raw">
								<label for="inputPassword4">Phone</label>
     							<input type="password" class="form-control" id="inputPassword4" />
							</div>
						</div>
						<div className="col-md-4">
							<div className="raw">
							<label for="inputPassword4">Email</label>
     						<input type="password" class="form-control" id="inputPassword4" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-8 col-offset-2">
							<h5>Mother's Name</h5>
						</div>
					</div>
					<div className="row">
					<div className="col-md-4 col-offset-2">
							<input type="text" className="form-control" placeholder="first name" />
						</div>
						<div className="col-md-4">
							<input type="text" className="form-control" placeholder="last name" />
						</div>
					</div>
					<div className="row">
						<div className="col-md-8">
							<h5>Mother's Qualification</h5>
							<div class="form-group">
								<div class="input-group date" id="datetimepicker1">
									<input type="text" class="form-control" />
									<span class="input-group-addon">
										<span class="glyphicon glyphicon-calendar"></span>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="raw">
								<label for="inputPassword4">Phone</label>
     							<input type="password" class="form-control" id="inputPassword4" />
							</div>
						</div>
						<div className="col-md-4">
							<div className="raw">
							<label for="inputPassword4">Email</label>
     						<input type="password" class="form-control" id="inputPassword4" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-8">
							<h5>Address</h5>
						</div>
					</div>
					<div className="row">
						<div className="col-md-8">
							<input type="text" class="form-control" placeholder= "Street address" />
						</div>
					</div>
					<div className="row">
					<div className="col-md-8 mt-2">
							<input type="text" class="form-control" placeholder= "House Number" />
						</div>
					</div>
					<div className="row">
					<fieldset class="form-group">
						<div class="row">
						<legend class="col-form-label col-md-8 pt-0">Payment Details</legend>
						<div class="col-sm-10">
							<div class="form-check">
							<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
							<label class="form-check-label" for="gridRadios1">
								Cash
							</label>
							</div>
							<div class="form-check">
							<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
							<label class="form-check-label" for="gridRadios2">
								Check
							</label>
							</div>
							<div class="form-check disabled">
							<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />							<label class="form-check-label" for="gridRadios3">
								Support
							</label>
							</div>
						</div>
						</div>
					</fieldset>
					</div>
					<div class="form-group row">
						<div class="col-md-8">Terms of Services</div>
						<div class="col-sm-10">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" id="gridCheck1" />
							<label class="form-check-label" for="gridCheck1">
							I agree to <Link>terms of services.</Link>
							</label>
						</div>
						</div>
					</div>
					<button className= "btn btn-secondary btn-md mb-5" >Register</button>
				</form>
					</div>
					<div className="col-lg-2"></div>
				</div>
			</div>				
			
		);
	}
}

export default SignUp;
