import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";




export default class Responsive extends Component {
  
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots:false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:false
          }
        }
      ]
    };
    return (
      <div className="slider">
        <Slider {...settings} className="set">
          <div className="slider-1">
            <Link to="/contact" className="link-1">
            <button type="button">Check me out</button>
            </Link>
          </div>
          <div className="slider-2">
          <Link to="/contact" className="link-1">
            <button type="button">Check me out</button>
            </Link>
          </div>
          <div className="slider-3">
          <Link to="/contact" className="link-1">
            <button type="button">Check me out</button>
            </Link>
          </div>
          <div className="slider-4">
          <Link to="/contact" className="link-1">
            <button type="button">Check me out</button>
            </Link>
          </div>
          <div className="slider-5">
          <Link to="/contact" className="link-1">
            <button type="button">Check me out</button>
            </Link>
          </div>
          <div className="slider-6">
          <Link to="/contact" className="link-1">
            <button type="button">Check me out</button>
            </Link>
          </div>
          <div className="slider-7">
          <Link to="/contact" className="link-1">
            <button type="button">Check me out</button>
            </Link>
          </div>
          <div className="slider-8">
          <Link to="/contact" className="link-1">
            <button type="button">Check me out</button>
            </Link>
          </div>
          <div className="slider-9">
          <Link to="/contact" className="link-1">
            <button type="button">Check me out</button>
            </Link>
          </div>
          <div className="slider-10">
          <Link to="/contact" className="link-1">
            <button type="button">Check me out</button>
            </Link>
          </div>
          <div className="slider-11">
          <Link to="/contact" className="link-1">
            <button type="button">Check me out</button>
            </Link>
          </div>
          <div className="slider-12">
          <Link to="/contact" className="link-1">
            <button type="button">Check me out</button>
            </Link>
          </div>
          <div className="slider-13">
          <Link to="/contact" className="link-1">
            <button type="button">Check me out</button>
            </Link>
          </div>
          <div className="slider-14">
          <Link to="/contact" className="link-1">
            <button type="button">Check me out</button>
            </Link>
          </div>
          <div className="slider-15">
          <Link to="/contact" className="link-1">
            <button type="button">Check me out</button>
            </Link>
          </div>
          <div className="slider-16">
          <Link to="/contact" className="link-1">
            <button type="button">Check me out</button>
            </Link>
          </div>
          <div className="slider-17">
          <Link to="/contact" className="link-1">
            <button type="button">Check me out</button>
            </Link>
          </div>
          <div className="slider-18">
          <Link to="/contact" className="link-1">
            <button type="button">Check me out</button>
            </Link>
          </div>
          <div className="slider-19">
          <Link to="/contact" className="link-1">
            <button type="button">Check me out</button>
            </Link>
          </div>
          <div className="slider-20">
          <Link to="/contact" className="link-1">
            <button type="button">Check me out</button>
            </Link>
          </div>
        </Slider>
      </div>
    );
  }
}