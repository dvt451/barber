import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation, Parallax } from 'swiper/modules'
import flower from '../../img/flower.webp'
import { useEffect } from 'react'
import AOS from "aos";


export default function Review() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         offset: 0,
         easing: 'ease',
     });
   }, [])
   
  return (
   <div className="about-review home-review">
   <div data-aos="zoom-in-up" className="about-review__column _ibg">
      <img src={flower} alt="Picture" />
   </div>
   <div className="about-review__column">
       <div className='about-review__container'>
          <h4 data-aos="zoom-in-up" className="about-review__title">WHAT CLIENTS SAY</h4>
             <Swiper
                modules={[Navigation,Parallax]}
                slidesPerView={1}
                spaceBetween={30}
                speed={800}
                parallax={true}
               loop={true}
                navigation={{
                   prevEl: '.home-review__prev',
                   nextEl: '.home-review__next',
                 }}
             >
                <SwiperSlide>
                <div data-aos="zoom-in-up" className="home-review__slide swiper-slide">
                   <div  data-swiper-parallax-opacity='0' data-swiper-parallax-scale='0.15' data-swiper-parallax="-200"  className="home-review__text text _icon-coma">If you are looking for the place to get your first tattoo or piercing, this is the exact place to get the perfect experience.</div>
                   <div data-swiper-parallax-opacity='0' data-swiper-parallax-scale='0.15' data-swiper-parallax="-200"  className="home-review__name">Harry James</div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div data-aos="zoom-in-up" className="home-review__slide swiper-slide">
                   <div data-swiper-parallax-opacity='0' data-swiper-parallax-scale='0.15' data-swiper-parallax="-200"  className="home-review__text text _icon-coma">If you are looking for the place to get your first tattoo or piercing, this is the exact place to get the perfect experience.</div>
                   <div data-swiper-parallax-opacity='0' data-swiper-parallax-scale='0.15' data-swiper-parallax="-200"  className="home-review__name">Harry James</div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div data-aos="zoom-in-up" className="home-review__slide swiper-slide">
                   <div data-swiper-parallax-opacity='0' data-swiper-parallax-scale='0.15' data-swiper-parallax="-200"  className="home-review__text text _icon-coma">If you are looking for the place to get your first tattoo or piercing, this is the exact place to get the perfect experience.</div>
                   <div data-swiper-parallax-opacity='0' data-swiper-parallax-scale='0.15' data-swiper-parallax="-200"  className="home-review__name">Harry James</div>
                </div>
                </SwiperSlide>
             </Swiper>
          <div className="home-review__buttons">
             <button data-aos="zoom-in-up" type="button" className="home-review__button arr-butt home-review__next _icon-arrow-left"></button>
             <button data-aos="zoom-in-up" type="button" className="home-review__button arr-butt home-review__prev _icon-arrow"></button>
          </div>
       </div>
   </div>
 </div>
  )
}
