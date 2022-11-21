import React from 'react';
import Bounce from 'react-reveal/Bounce';
import cam10 from "./Onmarket/cam-010.JPG"
import coro015 from "./Onmarket/coro-015.JPG"
import lexux08 from "./Onmarket/lexus08.JPG"
import venza08 from "./Onmarket/venza08.JPG"
import highl from "./Onmarket/hi05.JPG"
import coro12 from "./Onmarket/coro-012.JPG"
import coro05 from "./Onmarket/coro05.JPG"
import rav4 from "./Onmarket/raf08.JPG"
import coro08 from "./Onmarket/coro08.JPG"
import muscle07 from "./Onmarket/muscle07.JPG"
import cam05 from "./Onmarket/cam05.JPG"
import coros from "./Onmarket/coro-sport05.JPG"
import camblue07 from "./Onmarket/cam07-blue.JPG"
import camred07  from "./Onmarket/cam07-red.JPG"
import hiwhite from "./Onmarket/hi05-white.JPG"
import coro12white from "./Onmarket/coro-012-white.JPG"
import { Link } from 'react-router-dom';

class BounceExample extends React.Component {
  render() {
    return (
      <div className='top-bounce'>
        <Bounce>
          <div className='bounce1'>
            <img src={cam10} alt="" />
            <div className="car-info">
                <h4>2010 Toyota Camry</h4>
                    <Link to="/contact" className='price'>
                    <p>PRICE</p>
                    <h3>Ask The Seller</h3>
                    </Link>
                <div className="mileage">
                    <p>Mileage</p>
                    <h2>120,000</h2>
                    <h3>AVAILABLE</h3>
                </div>
            </div>
          </div>
          <div className='bounce2'>
          <img src={coro015} alt="" />
            <div className="car-info">
                <h4>2015 Toyota Corolla</h4>
                    <Link to="/contact" className='price'>
                    <p>PRICE</p>
                    <h3>Ask The Seller</h3>
                    </Link>
                <div className="mileage">
                    <p>Mileage</p>
                    <h2>110,000</h2>
                    <h3>AVAILABLE</h3>
                </div>
                </div>
          </div>
          <div className='bounce3'>
          <img src={lexux08} alt="" />
            <div className="car-info">
                <h4>2008 Lexus-RX 350</h4>
                    <Link to="/contact" className='price'>
                    <p>PRICE</p>
                    <h3>Ask The Seller</h3>
                    </Link>
                <div className="mileage">
                    <p>Mileage</p>
                    <h2>150,000</h2>
                    <h3>AVAILABLE</h3>
                </div>
                </div>
          </div>
          <div className='bounce4'>
          <img src={venza08} alt="" />
            <div className="car-info">
                <h4>2008 Toyota Venza</h4>
                    <Link to="/contact" className='price'>
                    <p>PRICE</p>
                    <h3>Ask The Seller</h3>
                    </Link>
                <div className="mileage">
                    <p>Mileage</p>
                    <h2>100,000</h2>
                    <h3>AVAILABLE</h3>
                </div>
                </div>
          </div>
          <div className='bounce5'>
          <img src={highl} alt="" />
            <div className="car-info">
                <h4>2005 Toyota Hightlander</h4>
                    <Link to="/contact" className='price'>
                    <p>PRICE</p>
                    <h3>Ask The Seller</h3>
                    </Link>
                <div className="mileage">
                    <p>Mileage</p>
                    <h2>160,000</h2>
                    <h3>AVAILABLE</h3>
                </div>
                </div>
          </div>
          <div className='bounce6'>
          <img src={coro12} alt="" />
            <div className="car-info">
                <h4>2012 Toyota Corolla Sport</h4>
                    <Link to="/contact" className='price'>
                    <p>PRICE</p>
                    <h3>Ask The Seller</h3>
                    </Link>
                <div className="mileage">
                    <p>Mileage</p>
                    <h2>155,000</h2>
                    <h3>AVAILABLE</h3>
                </div>
                </div>
          </div>
          <div className='bounce7'>
          <img src={coro05} alt="" />
            <div className="car-info">
                <h4>2005 Toyota Corolla</h4>
                    <Link to="/contact" className='price'>
                    <p>PRICE</p>
                    <h3>Ask The Seller</h3>
                    </Link>
                <div className="mileage">
                    <p>Mileage</p>
                    <h2>140,000</h2>
                    <h3>AVAILABLE</h3>
                </div>
                </div>
          </div>
          <div className='bounce8'>
          <img src={rav4} alt="" />
            <div className="car-info">
                <h4>2012 Toyota RAV4</h4>
                    <Link to="/contact" className='price'>
                    <p>PRICE</p>
                    <h3>Ask The Seller</h3>
                    </Link>
                <div className="mileage">
                    <p>Mileage</p>
                    <h2>123,000</h2>
                    <h3>AVAILABLE</h3>
                </div>
                </div>
          </div>
          <div className='bounce9'>
          <img src={muscle07} alt="" />
            <div className="car-info">
                <h4>2007 Toyota Camry</h4>
                    <Link to="/contact" className='price'>
                    <p>PRICE</p>
                    <h3>Ask The Seller</h3>
                    </Link>
                <div className="mileage">
                    <p>Mileage</p>
                    <h2>120,000</h2>
                    <h3>AVAILABLE</h3>
                </div>
                </div>
          </div>
          <div className='bounce10'>
          <img src={coro08} alt="" />
            <div className="car-info">
                <h4>2008 Toyota Corolla</h4>
                    <Link to="/contact" className='price'>
                    <p>PRICE</p>
                    <h3>Ask The Seller</h3>
                    </Link>
                <div className="mileage">
                    <p>Mileage</p>
                    <h2>145,000</h2>
                    <h3>AVAILABLE</h3>
                </div>
                </div>
          </div>
          <div className='bounce11'>
          <img src={cam05} alt="" />
            <div className="car-info">
                <h4>2005 Toyota Camry</h4>
                    <Link to="/contact" className='price'>
                    <p>PRICE</p>
                    <h3>Ask The Seller</h3>
                    </Link>
                <div className="mileage">
                    <p>Mileage</p>
                    <h2>109,000</h2>
                    <h3>AVAILABLE</h3>
                </div>
                </div>
          </div>
          <div className='bounce12'>
          <img src={coros} alt="" />
            <div className="car-info">
                <h4>2005 Toyota Corolla Sport</h4>
                    <Link to="/contact" className='price'>
                    <p>PRICE</p>
                    <h3>Ask The Seller</h3>
                    </Link>
                <div className="mileage">
                    <p>Mileage</p>
                    <h2>142,000</h2>
                    <h3>AVAILABLE</h3>
                </div>
                </div>
          </div>
          <div className='bounce13'>
          <img src={camblue07} alt="" />
            <div className="car-info">
                <h4>2007 Toyota Camry</h4>
                    <Link to="/contact" className='price'>
                    <p>PRICE</p>
                    <h3>Ask The Seller</h3>
                    </Link>
                <div className="mileage">
                    <p>Mileage</p>
                    <h2>162,000</h2>
                    <h3>AVAILABLE</h3>
                </div>
                </div>
          </div>
          <div className='bounce14'>
          <img src={camred07} alt="" />
            <div className="car-info">
                <h4>2007 Toyota Camry</h4>
                    <Link to="/contact" className='price'>
                    <p>PRICE</p>
                    <h3>Ask The Seller</h3>
                    </Link>
                <div className="mileage">
                    <p>Mileage</p>
                    <h2>132,000</h2>
                    <h3>AVAILABLE</h3>
                </div>
                </div>
          </div>
          <div className='bounce15'>
          <img src={hiwhite} alt="" />
            <div className="car-info">
                <h4>2004 Toyota Highlander</h4>
                    <Link to="/contact" className='price'>
                    <p>PRICE</p>
                    <h3>Ask The Seller</h3>
                    </Link>
                <div className="mileage">
                    <p>Mileage</p>
                    <h2>152,000</h2>
                    <h3>AVAILABLE</h3>
                </div>
                </div>
          </div>
          <div className='bounce16'>
          <img src={coro12white} alt="" />
            <div className="car-info">
                <h4>2012 Toyota Corolla</h4>
                    <Link to="/contact" className='price'>
                    <p>PRICE</p>
                    <h3>Ask The Seller</h3>
                    </Link>
                <div className="mileage">
                    <p>Mileage</p>
                    <h2>142,000</h2>
                    <h3>AVAILABLE</h3>
                </div>
                </div>
          </div>
        </Bounce>
      </div>
    );
  }
}

export default BounceExample;
