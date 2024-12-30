import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Contacts() {
   const [checked, setChecked] = useState(false)
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [])
  return (
   <main className="contacts">
   <section className="home__head home-head">
      <div className="home-head__container">
         <div className="home-head__content head-content">
            <h1 data-aos="zoom-in-down" className="head-content__title title">Contacts</h1>
            <div data-aos="zoom-in-down" className="head-content__mark"><Link to={'/'}>Home</Link> : <span>Contacts</span></div>
         </div>
      </div>
   </section>
   <section className="contacts__info info">
      <div className="info__container">
         <div data-aos="zoom-in-up" className="info__items">
            <div data-aos="zoom-in-up" className="info__name">LOCATION</div>
            <div data-aos="zoom-in-up" className="info__text text">128 Winston st, New York,<br /> NY 05120</div>
            {/* <a data-aos="zoom-in-up" href="#" className="info__link link"><span>Get directions</span><i className="fa fa-solid fa-chevron-right fa-shake"></i></a> */}

         </div>
         <div data-aos="zoom-in-up" className="info__items">
            <div data-aos="zoom-in-up" className="info__name">CONTACT US</div>
            <div className="info__text text">
               <div data-aos="zoom-in-up" className="text__mark">Call: <a className="link" href="tel:1.800.218.20.20">1.800.218.20.20</a></div>
               <div data-aos="zoom-in-up" className="text__mark">Write: <a className="link" href="mailto:hello@exemple.com">hello@exemple.com</a></div>
            </div>
               {/* <a data-aos="zoom-in-up" href="#" className="info__link link"><span>Appointment</span><i className="fa fa-solid fa-chevron-right fa-shake"></i></a> */}
         </div>
         <div data-aos="zoom-in-up" className="info__items">
            <div data-aos="zoom-in-up" className="info__name">WORKING HOURS</div>
            <div data-aos="zoom-in-up" className="info__text text">Mon – Sat: 9am – 8pm <br/>Sun: 9am – 6pm</div>
            {/* <a data-aos="zoom-in-up" href="#" className="info__link link"><span>Choose a stylist</span><i className="fa fa-solid fa-chevron-right fa-shake"></i></a> */}
         </div>
      </div>
   </section>
   <section className="contacts__in-touch">
      <div className="in-touch__column">
         <div className="in-touch__content">
            <div data-aos="zoom-in-up" className="in-touch__title title">Get in <span>Touch</span></div>
            <form className="in-touch__form form">
               <div data-aos="zoom-in-up" className="form__items"><input type="text" placeholder="NAME" className="form__input"/></div>
               <div data-aos="zoom-in-up" className="form__items"><input type="email" placeholder="EMAIL" className="form__input"/></div>
               <div data-aos="zoom-in-up" className="form__text"><textarea className="form__textarea" placeholder="MESSAGE" name="message" id="" cols="30" rows="6"></textarea></div>
               <div data-aos="zoom-in-up" className="checkbox">
                     <input id="c_1" data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]"/>
                     <label for="c_1" onClick={()=>{
                        setChecked(!checked)
                     }} className="checkbox__label"><span className="checkbox__text">I have read and agree with the <a className="checkbox__link" href="#">Privacy Policy</a></span></label>
               </div>
               <div data-aos="zoom-in-up" className="form__butt"><button type='submit' style={{
                  pointerEvents: checked ? 'auto' : 'none',
                  borderColor: checked ? '#96885f' : 'rgb(69, 69, 69)'}}
                  className="form__button">Send message</button></div>
            </form>
         </div>
      </div>
      <div className="in-touch__column">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4095339070645!2d44.51007617558084!3d40.177698570153666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcfa28499691%3A0x2bde14d127166c74!2sRepublic%20Square!5e0!3m2!1sen!2sam!4v1692255279024!5m2!1sen!2sam" width="100%" height="100%" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
   </section>

   <section className="services__bottom bottom">
      <h2 data-aos="zoom-in-up" className="bottom__title title"><span>We're here</span><br/> For you</h2>
      <Link to={'/appointment'} data-aos="zoom-in-up" className="bottom__button bbtn">Make an appointment</Link>
   </section>
</main>
  )
}
