import React, { Component } from 'react'

class Apply extends Component {
    state = {  }
    render() { 
        return ( 
            <div className= "container">
                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                <form className="mt-3" >
                    <h4>Apply Now</h4>
                    <div className="form-group">
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" className="form-control" id="fullname" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <input type="email" className="form-control" id="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cv">CV</label>
                        <input type="file" className="form-control-file" id="cv" />
                    </div>
                    <button type="submit" className="btn btn-secondary mb-3 btn-lg" >Apply</button>
                </form>
                </div>
                <div className="col-md-2"></div>
                </div>
                
            </div>
         );
    }
}
 
export default Apply;