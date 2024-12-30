import React, { useEffect } from 'react'
import Video from '../../Components/Video'
import { Link } from 'react-router-dom'
import AOS from "aos";


export default function Head() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         offset: 0,
         easing: 'ease',
     });
   }, [])
   
  return (
   <section className="home__head home-head">
      <div className="layer"></div>
      <div className="home-head__container">
         <div className="home-head__content head-content">
            <h1 data-aos="zoom-in-down" className="head-content__title title">APPOINTMENT</h1>
            <div data-aos="zoom-in-down" className="head-content__mark"><Link to={'/'}>Home</Link> : <span>Appointment</span></div>
         </div>
      </div>
   </section>
  )
}
