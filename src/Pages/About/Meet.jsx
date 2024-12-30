import React, { useContext, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import img1 from '../../img/team-copyright-11-590x660.webp'
import img2 from '../../img/team-copyright-12-590x660.webp'
import img3 from '../../img/team-copyright-4-4-590x660.webp'
import img4 from '../../img/team-copyright-10-590x660.webp'
import { Link } from 'react-router-dom'
import Persons from '../../Components/Persons'
import { MyContext } from '../../App'
import AOS from "aos";




export default function Meet() {
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
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 2.5,
			spaceBetween: 30,
		},
	}
	const _ = useContext(MyContext)
	console.log(_.catching);
	return (
		<section className="meet home-works">
			<div className="home-works__column">
				<Swiper
					dir='rtl'
					modules={[Navigation]}
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
						Persons.map((item, i) => {
							return <SwiperSlide key={i}>
								<div data-aos="zoom-in-up" className="team-members__items">
									<Link to={`/barber/${i + 1}`} className="team-members__member _ibg">
										<img src={item.pic} alt="" />
										<div className="team-members__context">
											<div className="team-members__name">{item.name}</div>
											<div className="team-members__text text">{item.text_short}</div>
											<div className="team-members__link link"><span>Read more</span><i className="fa fa-solid fa-chevron-right fa-shake"></i></div>
										</div>
										<div className="team-members__layer"></div>
									</Link>
								</div>
							</SwiperSlide>
						})
					}
				</Swiper>
			</div>
			<div className="home-works__column">
				<div className="home-works__content">
					<h2 data-aos="zoom-in-up" data-scroll className="meet__title title"><span>Meet <br /> the</span> team</h2>
					<div data-scroll className="home-works__buttons custom-navigation">
						<button data-aos="zoom-in-up" className="home-works__button home-works__next _icon-arrow-left"></button>
						<button data-aos="zoom-in-up" className="home-works__button home-works__prev _icon-arrow"></button>
					</div>
				</div>
			</div>
		</section>
	)
}
