import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
            <li style={{backgroundImage: 'url(images/img_bg_1.jpg)'}}>
              <div className="overlay">
              <div className="container-fluid">
              <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                      <h1>Hi! <br />I'm Cameron</h1>
                      <h2>Welcome to my website</h2>
                      <p><a className="btn btn-primary btn-learn">Download CV <em className="icon-download4" /></a></p>
                      </div>
                  </div>  
                  </div>
              </div>  
              </div>
              </div>
            </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

export default HomePage;