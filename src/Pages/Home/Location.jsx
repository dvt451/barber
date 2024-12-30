import React, { useEffect } from 'react'
import AOS from "aos";
import { Link } from 'react-router-dom';

export default function Location() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         offset: 0,
         easing: 'ease',
     });
   }, [])
   
  return (
   <section className="home__location home-location">
   <div className="home-location__column">
      <div className="home-location__container">
         <h2 data-aos="zoom-in-up" className="home-location__title title">SERVICE <span>BEYOND <br/> EXPECTATION</span></h2>
         <div data-aos="zoom-in-up" className="home-location__text text">Our barbershop is the territory created purely for men who appreciate premium quality, time and flawless look. We'll help you to look stylish and confident in the most discreet way.</div>
         <Link data-aos="zoom-in-up" to='/about us' className="home-location__button bbtn">Read more about us</Link>
      </div>
   </div>
   <div className="home-location__column">
      <div className="home-location__container">

         <div className="home-location__item">
            <Link to='/contacts' data-aos="zoom-in-up" className="home-location__location _icon-location">LOCATION</Link>
            <div data-aos="zoom-in-up" className="home-location__address">128 Winston st, Upper West Side, Manhattan, New York, NY 05120</div>
            <Link to='/contacts' className="home-location__link link"><span data-aos="zoom-in-up">get directions</span><i className="fa fa-solid fa-chevron-right fa-shake"></i></Link>
            <div data-aos="zoom-in-up" className="home-location__seperator"></div>
         </div>

         <div className="home-location__item">
            <a data-aos="zoom-in-up" href="tel:0000000" className="home-location__number _icon-mobile">1.800.218.20.20</a>
            <div data-aos="zoom-in-up" className="home-location__hours">Monday – Saturday: 9am – 8pm<br/>Sunday: 9am – 6pm</div>
         </div>

      </div>
   </div>
</section>
  )
}
