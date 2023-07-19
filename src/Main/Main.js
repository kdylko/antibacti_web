import React from 'react';
import app from './app.jpg';
import app_store from'./Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
import play_market from'./google-play-badge.png';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
  return (
    <div className="container text-left">
      <div className="row">
        <div className="col-4">
        <br></br>
        <br></br>
          <p className="h2">Antibacti App</p>
          <br></br>
          AntiBacti is an innovative mobile app designed to enhance your knowledge and understanding of antibiotics and bacteria, specifically tailored for medical students and healthcare professionals. Whether you are a student of medicine or already a licensed MD, AntiBacti provides a comprehensive collection of tests and quizzes that will challenge and expand your understanding of this critical topic.
          <br></br>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col-4">
              <img src={app_store} className="img-fluid" alt="Description" />
            </div>
            <div className="col-4">
              <img src={play_market} className="img-fluid" alt="Description" />
            </div>
          </div>
          
        </div>
        <div className="col-2">

        </div>
        <div className="col-6">
          <img src={app} className="img-fluid" alt="Description" />
        </div>
      </div>
    </div>
  );
}

export default Main;
