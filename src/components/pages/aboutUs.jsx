import React, { Component } from 'react';
// import {React.Fragment} from 'react-router-dom'
import AboutUsContent from './aboutUsContent';
import OurTeam from './ourTeam';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <AboutUsContent />
                <OurTeam />
            </div>
        )
    }
}

export default AboutUs;