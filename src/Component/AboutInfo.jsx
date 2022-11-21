import React from 'react';
import Flip from 'react-reveal/Flip';
import { Link } from 'react-router-dom';

class FlipExample extends React.Component {
  render() {
    return (
      <div className='flip'>
        <Flip bottom>
            <h1>ABOUT JIMONE GLOBAL MOTORS</h1>
            <div className='flip1'>
        <p>
         The Jimone Global Motors. A professional
         advisor that assists clients who are in
           the market to acquire a new or pre-owned
           vehicle. Honest advice, guidance, and
             options that a typical dealer would never
               offer. Picture a honest, ethical real 
               estate brokerage for car buyers and sellers. 
               That's a Jimone Global Motors.
          </p>
            </div>
            <div className="flip2">
                <p>
                Located on the No 1 Wole-ola Estate Ogo-Oluwa, 
                 Jimone Global Motors is dedicated to
                 making the car shopping, financing,
                  and purchasing experience simple, fun, and quick.
                </p>
            </div>
            <div className="flip3">
                <p>
                We start by offering a wide selection of
                 quality, high-value automobiles for 
                 almost any budget. We have a variety of 
                 cars, vans, SUVs, and pickups available 
                 from many of today's top auto brands. 
                 We carefully select the vehicles we put
                  on our lot and work hard to offer some
                   of the best vehicles available in Nigeria.
                </p>
            </div>
            <div className="flip4">
                <p>
                Next, Jimone Global Motors offers experienced,
                 courteous sales support to each of our guests.
                  Whether you're on the lot to check out a specific
                   vehicle, or need a little help considering all
                    the options for your growing family, our sales
                     team is dedicated to making sure you enjoy the
                      shopping experience and have the information
                       you need to make the right decision for you.
                        We will be happy to answer your questions
                         about features and options and offer you 
                         a vehicle history report so you can buy 
                         with confidence. We're always focused on
                          customer satisfaction and will never
                           pressure you into a vehicle that
                           isn't right for you.
                </p>
            </div>
            <div className="flip4">
                <p>
                Finally, we make getting behind the wheel of your next 
                vehicle easy with affordable financing options.
                </p>
            </div>
            <div className="flip5">
                <p>
                We can work with you to get you the financing
                 you deserve, even if you don't have so much money.
                </p>
            </div>
            <div className="flip6">
                <p>
                Jimone Global Motors is dedicated to making the car 
                buying experience simple. We hope you'll stop by or 
                contact us the next time you're shopping for a 
                quality New or used vehicle in Nigeria. We 
                look forward to your visit.
                </p>
            </div>
            <div className="flip7">
                <Link to="/contact" className='flip-link'>
                <p>CONTACT US</p>
                </Link>
            </div>
        </Flip>
      </div>
    );
  }
}

export default FlipExample;