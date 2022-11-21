import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    };
    return (
      <div className="cus-slider">
        <h2>CLIENT TESTIMONIES</h2>
        <Slider {...settings} className="fade-slider">
          <div className="fade-slider1">
            <p>“This is the third vehicle we have purchased
                 from JIMONE GLOBAL MOTORS. We come back because they 
                 are so good to us. ”</p>
                 <h3>ENG. JIMOH.M</h3>
          </div>
          <div className="fade-slider2">
            <p>
            I bought my last new car at JIMONE GLOBAL MOTORS. 
            I've recommended them to every friend I have that
             was in need of a new or used vehicle.
              I have complete confidence they will make sure
               the customer is happy.
            </p>
               <h3>DOC. ADESHINA.O</h3>
          </div>
          <div className="fade-slider3">
            <p>This is the 4th vehicle we have purchased from JIMONE GLOBAL MOTORS.
                 Each time, we are never disappointed. They are great 
                 at finding ideal vehicles.My parents bought from them, as well. We highly recommend them.</p>
                    <h3>MRS. GRACE. A</h3>
          </div>
          <div className="fade-slider4">
            <p>
            So appreciative to JIMONE GLOBAL MOTORS for helping me find a great
             used car!.They made it so easy and affordable. The car 
               still has the value that I paid nearly a year later.
            </p>
            <h3>MAL. BELLO.Y</h3>
          </div>
        </Slider>
      </div>
    );
  }
}