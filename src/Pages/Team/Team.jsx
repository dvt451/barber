import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Swiper from 'swiper'
import { SwiperSlide } from 'swiper/react'
import video from '../../video/video2.mp4'
import Persons from '../../Components/Persons'

import member1 from '../../img/members/member1.webp'
import member2 from '../../img/members/member2.webp'
import member3 from '../../img/members/member3.webp'
import member4 from '../../img/members/member4.webp'
import member5 from '../../img/members/member5.webp'
import member6 from '../../img/members/member6.webp'
import member7 from '../../img/members/member7.webp'
import member8 from '../../img/members/member8.webp'
import { MyContext } from '../../App'
import AOS from "aos";


export default function Team() {

	const [watch, setWatch] = useState(false)
	const refVideo = useRef()
	const popupVideo = refVideo.current
	const _ = useContext(MyContext)
	useEffect(() => {
		window.scrollTo(0, 0);

		AOS.init({
			duration: 1000,
			offset: 0,
			easing: 'ease',
		});
	}, [])

	return (
		<main className='team'>
			<section className="home__head home-head">
				<div className="team__layer"></div>
				<div className="home-head__container">
					<div className="home-head__content head-content">
						<h1 data-aos="zoom-in-down" className="head-content__title title">Our team</h1>
						<div data-aos="zoom-in-down" className="head-content__mark"><Link to={'/'}>Home</Link> : <span>Our team</span></div>
					</div>
				</div>
			</section>
			<section className="team__members team-members">
				<div className='team-members__container'>
					<ul className="team-members__list">
						{
							Persons.map((item, i) => {
								return <li data-aos="zoom-in-up" key={i} className="team-members__items">
									<Link to={`/barber/${i + 1}`} className="team-members__member _ibg">
										<img src={item.pic} alt="" />
										<div className="team-members__context">
											<div className="team-members__name">{item.name}</div>
											<div className="team-members__text text">{item.hover_text}</div>
											<div className="team-members__link link"><span>Read more</span><i className="fa fa-solid fa-chevron-right fa-shake"></i></div>
										</div>
										<div className="team-members__layer"></div>
									</Link>
								</li>
							})
						}
					</ul>
				</div>
			</section>
			<section className="services__bottom bottom">
				<h2 data-aos="zoom-in-up" className="bottom__title title"><span>Discover our</span><br />works</h2>
				<button data-aos="zoom-in-up" className="bottom__button bbtn" onClick={() => {
					setWatch(true);
					refVideo.current.play()
				}}>Watch the video</button>
				<div data-aos="zoom-in-up" className="popup" style={{ display: watch ? "flex" : 'none' }}>
					<div className="popup__layer" onClick={() => {
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
		</main>
	)
}