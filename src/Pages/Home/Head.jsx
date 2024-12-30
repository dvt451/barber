import React, { useEffect } from 'react'
import Video from '../../Components/Video'
import AOS from "aos";
import { Link } from 'react-router-dom';

export default function Head() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         offset: 0,
         easing: 'ease',
         
     });
     window.scrollTo(0, 0);
   }, [])
   
  return (
      <section className="home__head home-head">
         <Video />
         <div className="home-head__layer"></div>
         <div className="home-head__container">
         <div className="home-head__content head-content">
            <h1 data-aos="zoom-in" className="head-content__title title">WE KNOW YOUR <br/> STYLE <span>BETTER</span></h1>
            <div data-aos="zoom-in" className="head-content__mark">EST'D 2007</div>
            <Link data-aos="zoom-in" to='/appointment' className="head-content__button bbtn">make an appointment</Link>
         </div>
         </div>
      </section>
  )
}
