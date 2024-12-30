import React, { useEffect, useRef, useState } from 'react'
import Head from './Head'
import Bottom from './Bottom'
import localeEn from 'air-datepicker/locale/en'
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';


export default function Appointment() {
   const today = new Date();
   today.setDate(today.getDate() + 1);
   const [active, setActive] = useState(false)

   const handleDateClick = () => {
         setActive(true)
    };
    useEffect(() => {

      const body = document.body
      active ? body.classList.add('_body-active') : body.classList.remove('_body-active')
    }, [active])
    
   useEffect(() => {
      window.scrollTo(0, 0);

      new AirDatepicker('#date', {
         locale: localeEn,
         inline: true,
         disableNavWhenOutOfRange: true,
         firstDay: 1,
         moveToOtherMonthsOnSelect: false,
         minDate: today,
         onSelect: handleDateClick,
     })
     const arrowNext = document.querySelector('[data-action="next"]');
     const arrowPrev = document.querySelector('[data-action="prev"]');
     arrowNext.classList = 'air-datepicker-nav--action _icon-arrow'
     arrowPrev.classList = 'air-datepicker-nav--action _icon-arrow-left'
     const cells = document.querySelectorAll('.air-datepicker-cell');
     for (let i = 0; i < cells.length; i++) {
      const element = cells[i];
      element.setAttribute('data-aos', 'fade-up')
     }
   }, [])
   
  return (
    <main className='appointment'>
      <div className='popup appointment-popup' style={{display: active ? 'flex' : 'none'}}>
            <div className="popup__layer" onClick={()=>{
            setActive(false)
         }} ></div>
            <div className='appointment-popup__content'>
               <div className="appointment-popup__head">
                  <h3 className="appointment-popup__main-title">REQUEST AN APPOINTMENT</h3>
                  <button onClick={()=>{
            setActive(false)
         }} className="appointment-popup__close"></button>
               </div>
              <div className='appointment-popup__body'>
                  <p className='appointment-popup__text'>Please confirm that you would like to request the following appointment:</p>
                  <div className="appointment-popup__details">
                     {/*  */}
                  </div>
                  <div className="appointment-popup__title">Your Information:</div>
                  <form>
                     <input type="text" name='surname' required placeholder='NAME...' className="appointment-popup__input" />
                     <input type="text" name='number' required placeholder='PHONE NUMBER...' className="appointment-popup__input" />
                     <button type='submit' className='appointment-popup__submit bbtn'>Request appointment</button>
                     <button onClick={()=>{
            setActive(false)
         }} type='button' className='appointment-popup__cancel bbtn'>Cancel</button>
                  </form>
              </div>
            </div>
         </div>
      <Head />
      <section data-aos="zoom-in-up" className="calendare">
         <div className='calendare__container'>
            <input type="text" style={{display: 'none'}} id="date" />
         </div>
         
      </section>
      <Bottom />
    </main>
  )
}
