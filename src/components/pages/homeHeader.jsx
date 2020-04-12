import React, { Component } from 'react';
import Outdoor from '../../images/Outdoor.jfif';
import Classroom from '../../images/Classroom.jfif';
import Discussion from '../../images/Discussion.jfif';

class HomeHeader extends Component {
    render() { 
    return (<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={Outdoor} class="d-block w-100 h-100" alt="Outdoor" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Outdoor</h5>
          <p>When students become a team, the more they share...</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={Discussion} class="d-block w-100 h-100" alt="Discussion" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Classroom Discussion</h5>
          <p>When students share inside Classrooms ...</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={Classroom} class="d-block w-100 h-100" alt="Classroom" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
     );
  }
}
 
export default HomeHeader;