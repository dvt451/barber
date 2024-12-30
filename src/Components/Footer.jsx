import React from 'react'
import Logo from '../img/logo1.webp'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
   <footer className="footer">
   <div className="footer__container">
      <div className="footer__rights">
           <a href="#" className="logo _ibg"><img src={Logo} alt="" /></a><span> © 2023 . All Rights Reserved.</span>
      </div>

     <div className="footer__location">
         <div className="footer-location__item">
            <Link to='/contacts' className="home-location__location _icon-location">128 WINSTON ST, NEW YORK</Link>
         </div>

         <div className="footer-location__item">
            <a href="tel:0000000" className="home-location__number _icon-mobile">1.800.218.20.20</a>
         </div>
     </div>

   </div>

</footer>
  )
}
