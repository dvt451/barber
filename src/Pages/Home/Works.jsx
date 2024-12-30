import { useEffect } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper/modules'
import img1 from '../../img/slide1.webp'
import img2 from '../../img/slide2.webp'
import img3 from '../../img/slide3.webp'
import AOS from "aos";



export default function Works() {
   const picture = [
      img1,
      img2,
      img3,
      img1,
      img2,
      img3,
   ]
   useEffect(() => {
      AOS.init({
         duration: 1000,
         offset: 0,
         easing: 'ease',
     });
   
   }, [])
   
   const breakpoints = {
      320: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      478: {
         slidesPerView: 1.5,
         spaceBetween: 20,
      },
      1268: {
         slidesPerView: 2,
         spaceBetween: 30,
      },
   }
  return (
   <section className="home__works home-works">
   <div data-scroll className="home-works__column">
      <Swiper
         modules={[Navigation]}
         slidesPerView={2}
   		spaceBetween={30}
         speed={800}
         loop={true}
         breakpoints={breakpoints}
         navigation={{
            prevEl: '.home-works__next',
            nextEl: '.home-works__prev',
          }}
      >
         {
            picture.map((item,i)=>{
               return <SwiperSlide key={i}>
                  <div data-aos="zoom-in-up" className="home-works__image _ibg"><img src={item} alt="picture"/></div>
            </SwiperSlide>
            })
         }
         
      </Swiper>
   </div>
   <div className="home-works__column">
      <div className="home-works__content">
         <h2 data-aos="zoom-in-up" className="home-works__title title"><span>DISCOVER <br/> OUR</span> WORKS</h2>
         <div data-aos="zoom-in-up" className="home-works__buttons custom-navigation">
            <button className="home-works__button home-works__next _icon-arrow-left"></button>
            <button className="home-works__button home-works__prev _icon-arrow"></button>
         </div>
      </div>
   </div>
</section>
  )
}
