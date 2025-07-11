import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../img/logo1.webp'
import AOS from "aos";


export default function Header() {
	const [burger, setBurger] = useState(false)
	const body = document.body;
	useEffect(() => {
		AOS.init({
			duration: 1000,
			offset: 0,
			easing: 'ease',
		});

		burger ? body.classList.add('_body-active') : body.classList.remove('_body-active')
	}, [burger])

	return (
		<header className="header">
			<div className="header__container">
				<div className="header__content">
					<div data-aos="zoom-in" className="header__logo">
						<Link to="/" className="header__logo-link logo _ibg">
							<img src={Logo} alt="" />
						</Link>
					</div>
					<nav data-aos="zoom-in" className="header__menu menu">
						<ul className="menu__list">
							{
								Menu.map((item, i) => {
									return <li key={i} className='menu__item'>
										<NavLink className="menu__link" to={item.href}>{item.text}</NavLink>
									</li>
								})
							}
						</ul>
					</nav>
					<button onClick={() => setBurger(!burger)} type="button" className={burger ? "burger__icon icon-burger menu-open" : "burger__icon icon-burger"} ><span></span></button>
					<div className={burger ? 'burger__body _active-burger' : 'burger__body'}>
						<ul className="burger__list">
							{
								Menu.map((item, i) => {
									return <li key={i} className='menu__item'><NavLink onClick={() => setBurger(false)} className="menu__link" to={item.href}>{item.text}</NavLink></li>
								})
							}
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}
