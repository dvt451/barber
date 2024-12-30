import React, { useEffect } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation, Parallax } from 'swiper/modules'
import AOS from "aos";
import { Link } from 'react-router-dom';

export default function Prices() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         offset: 0,
         easing: 'ease',
     });

   }, [])
   const priceList = [
      {
         name: 'HAIRCUT',
         price: '40',
      },
      {
         name: 'Shave',
         price: '35',
      },
      {
         name: 'Haircut + Shave',
         price: '70',
      },
      {
         name: 'Beard Trim',
         price: '15',
      },
   ]
  return (
   <section className="home__price-review home-price-review">
   <div className="home-price-review__price-list home-price-list">
      <div className="home-price-list__content">
         <h2 data-aos="zoom-in-up" className="home-price-list__title title"><span>OUR</span> PRICES</h2>
         <p data-aos="zoom-in-up" className="home-price-list__text text">Our services spectrum encompasses many techniques and procedures, from straight hairstyling to face care.</p>
         <ul className="home-price-list__list">
            {
               priceList.map((item,i)=>{
                  return <li data-aos="zoom-in-up" key={i} className="home-price-list__items"><span className="home-price-list__list-title">{item.name}</span><span className="home-price-list__amount">{item.price}</span></li>
               })
            }

         </ul>
         <Link data-aos="zoom-in-up" to='/services' className="home-price-list__button bbtn">view all prices</Link>
      </div>
   </div>
   <div className="home-price-review__review home-review">
     <div data-aos="zoom-in-up" className="home-review__image"></div>
     <div className="home-review__content">
         <h4 data-aos="zoom-in-up" className="home-review__title">WHAT CLIENTS SAY</h4>
            <Swiper data-aos="zoom-in-up"
               modules={[Navigation, Parallax]}
               slidesPerView={1}
               spaceBetween={30}
               parallax={true}
               speed={800}
               loop={true}
               navigation={{
                  prevEl: '.home-review__prev',
                  nextEl: '.home-review__next',
                }}
            >
               <SwiperSlide>
               <div className="home-review__slide swiper-slide">
                  <div data-swiper-parallax-opacity='0' data-swiper-parallax-scale='0.15' data-swiper-parallax="-200" data-aos="zoom-in-up" className="home-review__text text _icon-coma">If you are looking for the place to get your first tattoo or piercing, this is the exact place to get the perfect experience.</div>
                  <div data-swiper-parallax-opacity='0' data-swiper-parallax-scale='0.15' data-swiper-parallax="-300" data-aos="zoom-in-up" className="home-review__name">Harry James</div>
               </div>
               </SwiperSlide>
               <SwiperSlide>
               <div className="home-review__slide swiper-slide">
                  <div data-swiper-parallax-opacity='0' data-swiper-parallax-scale='0.15' data-swiper-parallax="-200" data-aos="zoom-in-up" className="home-review__text text _icon-coma">If you are looking for the place to get your first tattoo or piercing, this is the exact place to get the perfect experience.</div>
                  <div data-swiper-parallax-opacity='0' data-swiper-parallax-scale='0.15' data-swiper-parallax="-300" data-aos="zoom-in-up" className="home-review__name">Sam James</div>
               </div>
               </SwiperSlide>
               <SwiperSlide>
               <div className="home-review__slide swiper-slide">
                  <div data-swiper-parallax-opacity='0' data-swiper-parallax-scale='0.15' data-swiper-parallax="-200" data-aos="zoom-in-up" className="home-review__text text _icon-coma">If you are looking for the place to get your first tattoo or piercing, this is the exact place to get the perfect experience.</div>
                  <div data-swiper-parallax-opacity='0' data-swiper-parallax-scale='0.15' data-swiper-parallax="-300" data-aos="zoom-in-up" className="home-review__name">Don James</div>
               </div>
               </SwiperSlide>
            </Swiper>
         <div data-aos="zoom-in-up" className="home-review__buttons">
            <button type="button" className="home-review__button arr-butt home-review__next _icon-arrow-left"></button>
            <button type="button" className="home-review__button arr-butt home-review__prev _icon-arrow"></button>
         </div>
     </div>
   </div>

</section>
  )
}
