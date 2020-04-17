import React from 'react';
import { Link } from 'react-router-dom';
import Chairman from '../../images/chairman.png';
import CEO from '../../images/ceo.jpg';
import Principal from '../../images/principal.png';
import Parentchairwoman from '../../images/parentchairwoman.png';

const OurTeam = () => {
    return ( 
        <div id="team">
            <div className="container my-3 text-center">
                <div className="row" mb-5>
                    <div className="col">
                        <h2>Our Team</h2>
                    </div>
                </div>
                <div className= "row">
                    <div className= "col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <img src={Chairman} alt="charman" className= "img-fluid rounded-circle w-50 mb-3"/>
                                <h3>Mr. Alazar Hashelit</h3>
                                <h5>Board Chair Man</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ad placeat nesc!</p>
                                <div className="d-flex flex-row justify-content-center">
                                    <div className= "p-4">
                                        <Link to="">
                                            <i className= "fa fa-facebook"></i>
                                        </Link>
                                    </div>
                                    <div className= "p-4">
                                        <Link to="">
                                            <i className= "fa fa-twitter"></i>
                                        </Link>
                                    </div>
                                    <div className= "p-4">
                                        <Link to="">
                                            <i className= "fa fa-instagram"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= "col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <img src={CEO} alt="charman" className= "img-fluid rounded-circle w-50 mb-3"/>
                                <h3>Mr. Alazar Hashelit</h3>
                                <h5>CEO</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ad placeat nesc!</p>
                                <div className="d-flex flex-row justify-content-center">
                                    <div className= "p-4">
                                        <Link to="">
                                            <i className= "fa fa-facebook"></i>
                                        </Link>
                                    </div>
                                    <div className= "p-4">
                                        <Link to="">
                                            <i className= "fa fa-twitter"></i>
                                        </Link>
                                    </div>
                                    <div className= "p-4">
                                        <Link to="">
                                            <i className= "fa fa-instagram"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= "col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <img src={Principal} alt="charman" className= "img-fluid rounded-circle w-50 mb-3"/>
                                <h3>Mr. Alazar Hashelit</h3>
                                <h5>School Director</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.!</p>
                                <div className="d-flex flex-row justify-content-center">
                                    <div className= "p-4">
                                        <Link to="">
                                            <i className= "fa fa-facebook"></i>
                                        </Link>
                                    </div>
                                    <div className= "p-4">
                                        <Link to="">
                                            <i className= "fa fa-twitter"></i>
                                        </Link>
                                    </div>
                                    <div className= "p-4">
                                        <Link to="">
                                            <i className= "fa fa-instagram"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= "col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <img src={Parentchairwoman} alt="charman" className= "img-fluid rounded-circle w-50 mb-3"/>
                                <h3>Mrs. Samsom</h3>
                                <h5>Patrents Board Chairwoman</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ad placeat nesc!</p>
                                <div className="d-flex flex-row justify-content-center">
                                    <div className= "p-4">
                                        <Link to="">
                                            <i className= "fa fa-facebook"></i>
                                        </Link>
                                    </div>
                                    <div className= "p-4">
                                        <Link to="">
                                            <i className= "fa fa-twitter"></i>
                                        </Link>
                                    </div>
                                    <div className= "p-4">
                                        <Link to="">
                                            <i className= "fa fa-instagram"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
     );
}
 
export default OurTeam;