import React, { useEffect } from 'react'
import slide1 from '../../img/slide1.webp'
import { Link } from 'react-router-dom'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper/modules'
import img1 from '../../img/Styling.webp'
import img2 from '../../img/shaving.webp'
import img3 from '../../img/haircut.webp'
import img4 from '../../img/massage.webp'
import AOS from "aos";


export default function Services() {
   useEffect(() => {
   window.scrollTo(0, 0);

      AOS.init({
         duration: 1000,
         offset: 0,
         easing: 'ease',
     });
   }, [])
   
   const	breakpoints = {
      320: {
         slidesPerView: 1,
         spaceBetween: 20,
         autoHeight: true,
      },
      479: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      767: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
      1200: {
         slidesPerView: 4,
         spaceBetween: 30,
      },
   }
   const offerList = [
      {
         img: img1,
         title: 'Styling',
         text: 'Looking to try something new with your facial...',
      },
      {
         img: img2,
         title: 'Shaving',
         text: 'Looking to try something new with your facial...',
      },
      {
         img: img3,
         title: 'Haircut',
         text: 'Looking to try something new with your facial...',
      },
      {
         img: img4,
         title: 'Facial massage',
         text: 'Looking to try something new with your facial...',
      },
      {
         img: img1,
         title: 'Styling',
         text: 'Looking to try something new with your facial...',
      },
      {
         img: img2,
         title: 'Shaving',
         text: 'Looking to try something new with your facial...',
      },
      {
         img: img3,
         title: 'Haircut',
         text: 'Looking to try something new with your facial...',
      },
      {
         img: img4,
         title: 'Facial massage',
         text: 'Looking to try something new with your facial...',
      },
      
   ]
  return (
   <main className="services">
   <section className="services__head home-head">
      <div className="services__layer"></div>
      <div className="home-head__container">
         <div className="home-head__content head-content">
            <h1 data-aos="zoom-in-up" className="head-content__title title">OUR SERVICES</h1>
            <div data-aos="zoom-in-up" className="head-content__mark"><Link to='/'>Home</Link> : <span>Our Services</span></div>
         </div>
      </div>
   </section>
   <section className="services__technology services-technology">
      <div className="services-technology__container">
         
         <div className="services-technology__column">
            <div data-aos="zoom-in-up" className="services-technology__image _ibg"><img src={slide1} alt="" /></div>
         </div>
         <div className="services-technology__column">
            <div data-aos="zoom-in-up" className="services-technology__title title">About <span>Our technology</span></div>
            <div data-aos="zoom-in-up" className="services-technology__text text">Our barbershop is the territory created purely for males who appreciate premium quality, time and flawless look. Welcome to Nelson!</div>
            <Link data-aos="zoom-in-up" to="/our team" className="services-technology__button bbtn">Meet the team</Link>
         </div>
      </div>
   </section>
   <section id='allprices' className="services__service service">
      <div className="service__container">
               <Swiper
                  modules={[Navigation]}
                  loop={true}
                  slidesPerView={4}
                  spaceBetween={30}
                  speed={800}
                  breakpoints={breakpoints}
                  navigation={{
                     prevEl: '.service__prev',
                     nextEl: '.service__next',
                   }}
               >
                  {
                     offerList.map((item,i)=>{
                        return <SwiperSlide>
                           <div data-aos="zoom-in-up" className="service__item">
                     <i className="service__icon _ibg rotated"><img src={item.img} alt="" /></i>
                     <div className="service__name link2">{item.title}</div>
                     <div className="service__text text">Looking to try something new with your facial...</div>
                     {/* <a href="#" className="service__link link"><span>Read more</span><i className="fa fa-solid fa-chevron-right fa-shake"></i></a> */}
                  </div>
                        </SwiperSlide>
                     })
                  }

               </Swiper>
         <div className="service__buttons">
            <button data-aos="zoom-in-up" type="button" className="home-works__button service__prev _icon-arrow-left"></button>
            <button data-aos="zoom-in-up" type="button" className="home-works__button service__next _icon-arrow"></button>
         </div>
      </div>
   </section>
   <section className="services__prices prices">
      <div className="prices__container">
         <div className="prices__content">
                <div data-aos="zoom-in-up" className="prices__title title">Our <span>Prices</span></div>
                <div className="prices__price-lists">
                   <ul className="home-price-list__list">
                      <li data-aos="zoom-in-up" className="home-price-list__items"><span className="home-price-list__list-title">HAIRCUT</span><span className="home-price-list__amount">40</span></li>
                      <li data-aos="zoom-in-up" className="home-price-list__items"><span className="home-price-list__list-title">shave</span><span className="home-price-list__amount">35</span></li>
                      <li data-aos="zoom-in-up" className="home-price-list__items"><span className="home-price-list__list-title">haircut + shave</span><span className="home-price-list__amount">70</span></li>
                      <li data-aos="zoom-in-up" className="home-price-list__items"><span className="home-price-list__list-title">Beard trim</span><span className="home-price-list__amount">15</span></li>
                   </ul>
                   <ul className="home-price-list__list">
                      <li data-aos="zoom-in-up" className="home-price-list__items"><span className="home-price-list__list-title">HAIRCUT</span><span className="home-price-list__amount">40</span></li>
                      <li data-aos="zoom-in-up" className="home-price-list__items"><span className="home-price-list__list-title">shave</span><span className="home-price-list__amount">35</span></li>
                      <li data-aos="zoom-in-up" className="home-price-list__items"><span className="home-price-list__list-title">haircut + shave</span><span className="home-price-list__amount">70</span></li>
                      <li data-aos="zoom-in-up" className="home-price-list__items"><span className="home-price-list__list-title">Beard trim</span><span className="home-price-list__amount">15</span></li>
                   </ul>
                </div>
         </div>
      </div>
   </section>
   <section className="services__bottom bottom">
      <h2 data-aos="zoom-in-up" className="bottom__title title"><span>We're here</span><br/> For you</h2>
      <Link data-aos="zoom-in-up" to="/appointment" className="bottom__button bbtn">Make an appointment</Link>
   </section>
</main>
  )
}
