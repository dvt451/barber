import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import picture from '../../img/aboutpic.webp'
import Meet from './Meet'
import Review from './Review'
import AOS from "aos";


export default function About() {
   const skills =[
      {
         title: 'Graphick',
         percent: 82 + '%',
      },
      {
         title: 'DESIGN',
         percent: 94 + '%',
      },
      {
         title: 'SUCCESS',
         percent: 87 + '%',
      },
   ]
   useEffect(() => {
      window.scrollTo(0, 0);

      AOS.init({
         duration: 1000,
         offset: 0,
         easing: 'ease',
     });
   
   }, [])
   
  return (
   <main className="about">
   <section className="home__head home-head">
      <div className="home-head__container">
         <div className="home-head__content head-content">
            <h1 data-aos="zoom-in-down" className="head-content__title title">About us</h1>
            <div data-aos="zoom-in-down" className="head-content__mark"><Link to={'/'}>Home</Link> : <span>About</span></div>
         </div>
      </div>
   </section>
   <section className="about__choice choice">
         <div className="choice__column">
            <div className='choice__container'>
               <div data-aos="zoom-in-up" className="choice__title title">Why <span>Choose <br />Barber</span></div>
               <ul className='choice__skills skills'>
                  {
                     skills.map((item,i)=>{
                        return <li data-aos="zoom-in-up" key={i} className="skills__item">
                        <h4 className="skills__title">{item.title}</h4>
                        <span className="skills__value">{item.percent}</span>
                        <div className="skills__progress">
                           <div className="skills__progress-bar"></div>
                        </div>
                     </li>
                     })
                  }
               </ul>
            </div>
         </div>
         <div className="choice__column _ibg">
            <img data-aos="zoom-in-up" src={picture} alt="picture" />
         </div>
   </section>
   <Meet />
   <Review />


   <section className="services__bottom bottom">
      <h2 data-aos="zoom-in-up" data-scroll className="bottom__title title"><span>We're here</span><br/> For you</h2>
      <Link data-aos="zoom-in-up" to={'/appointment'} data-scroll className="bottom__button bbtn">MAKE AN APPOINTMENT</Link>
   </section>
</main>
  )
}
