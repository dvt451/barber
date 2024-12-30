import React, { useContext, useEffect, useRef, useState } from 'react'
import video from '../../video/video2.mp4'
import AOS from "aos";


export default function Bottom() {
   const [watch, setWatch] = useState(false)
   const refVideo = useRef()
   useEffect(() => {
      AOS.init({
         duration: 1000,
         offset: 0,
         easing: 'ease',
     });
   }, [])
   

  return (
   <section className="services__bottom bottom">
      <h2 data-aos="zoom-in-up" className="bottom__title title"><span>Discover our</span><br/>works</h2>
      <button data-aos="zoom-in-up" className="bottom__button bbtn" onClick={()=>{
         setWatch(true);
         refVideo.current.play()
      }}>Watch the video</button>
      <div className="popup" style={{display: watch ? "flex" : 'none'}}>
         <div className="popup__layer" onClick={()=>{
         setWatch(false)
         refVideo.current.pause()
      }} ></div>
         <div className="popup__content">
            <video ref={refVideo} controls>
               <source src={video} type="video/mp4" />
            </video>
         </div>
      </div>
   </section>
  )
}



