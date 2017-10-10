import React, { Component } from 'react';
import './reset.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Audiowide" rel="stylesheet"/>
        <div className='header'>
          <div className="links">
            <a className="home">Home</a>
            <a className="about">About</a>
            <a className="story">Story</a>
          </div>
          <div className="left-side">
            <div className="hamburger">
              <span className="line">___</span><br/>
              <span className="line">___</span><br/>
              <span className="line">___</span><br/>
            </div>
          </div>
          <div className="right-side">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className='fa fa-facebook'></div>
            <div className='fa fa-twitter'></div>
          </div>
        </div>
        <div className="textcontainer">
          <div className="appname">
            Your
          </div>
          <div className="subname">
            Project Portfolio
          </div>
          <div className="swipecontainer">
          <div className="downarrow">
            <div className="rectangle"></div>
            <div className="arrow"></div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
