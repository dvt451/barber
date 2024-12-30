import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { IoLogoFacebook } from 'react-icons/io'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa6'
import { MyContext } from '../../App'
import Persons from '../../Components/Persons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'


export default function Person() {
	const { id } = useParams();
	const barber = Persons.find((item) => item.id === Number(id));
	const navigate = useNavigate()
	const _ = useContext(MyContext)

	useEffect(() => {
		window.scrollTo(0, 0);
		if (!barber) {
			navigate('/');
		}
	}, [])


	const break_review = {
		767: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1268: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	}
	const breakpoints = {
		500: {
			slidesPerView: 1.5,
			spaceBetween: 10,
		},
		767: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		1600: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
	}
	return (
		<main className='person'>
			<section className="home__head home-head">
				<div className="person__layer"></div>
				<div className="home-head__container">
					<div className="home-head__content head-content">
						<h1 className="head-content__title title">{barber?.name}</h1>
						<div className="head-content__mark"><div className='head-content__pag'><Link to={'/'}>Home</Link> : <span>All Team</span> : <span>Davit Hammer</span></div></div>
					</div>
				</div>
			</section>
			<section className='person__header'>
				<div className='person__container'>
					<div className="person__picture">
						<img src={barber?.pic} alt="picture" />
					</div>
					<div className="person__info">
						<h2 className='person__title'>{barber?.name}</h2>
						<div className="person__details person-details">
							<div className='person-details__label'>
								<span className="person-details__text">Email: </span>
								<a href={"mailto:" + barber?.email} className='person-details__value'>{barber?.email}</a>
							</div>
							<div className='person-details__label'>
								<span className="person-details__text">Phone: </span>
								<a href={"tel:" + barber?.phone} className='person-details__value'>{barber?.phone}</a>
							</div>
							<div className='person-details__label'>
								<span className="person-details__text">Address: </span>
								<span className="person-details__text">{barber?.address}</span>
							</div>
						</div>
						<div className='person__texts'>
							<h5>Brief info</h5>
							<p className='person__text'>{barber?.text_1}</p>
							<p className='person__text'>{barber?.text_2}</p>
						</div>
						<ul className="person__soc-list">
							<li data-scroll className="home-team-socials__items"><a href="#" className="home-team-socials__link bbtn"><IoLogoFacebook /></a></li>
							<li data-scroll className="home-team-socials__items"><a href="#" className="home-team-socials__link bbtn"><BsTwitter /></a></li>
							<li data-scroll className="home-team-socials__items"><a href="#" className="home-team-socials__link bbtn"><BsInstagram /></a></li>
							<li data-scroll className="home-team-socials__items"><a href="#" className="home-team-socials__link bbtn"><FaLinkedinIn /></a></li>
						</ul>
					</div>
				</div>
			</section>
			<section className='person__works person-works'>
				<Swiper
					modules={[Navigation]}
					spaceBetween={0}
					breakpoints={breakpoints}
					speed={800}
					loop={true}
					freeMode={true}
					navigation={{
						prevEl: '.home-works__next',
						nextEl: '.home-works__prev',
					}}
				>
					{
						barber?.works.map((item, i) => {
							return <SwiperSlide key={i}>
								<div className='person-works__item _ibg'>
									<img src={item} alt="" />
								</div>
							</SwiperSlide>
						})
					}
				</Swiper>
				<div data-scroll className="person-works__navigation">
					<button className="home-works__button home-works__next _icon-arrow-left"></button>
					<button className="home-works__button home-works__prev _icon-arrow"></button>
				</div>
			</section>
			<section className='person__clients person-clients'>
				<div className='person-clients__container'>
					<div className="person-clients__title title"><span>WHAT CLIENTS</span> SAY</div>
					<Swiper
						modules={[Navigation]}
						breakpoints={break_review}
						speed={800}
					//  loop={true}
					>
						{
							barber?.review.map((item, i) => {
								return <SwiperSlide>
									<div className="person-clients__item">
										<i className='person-clients__icon _icon-coma'></i>
										<div className="person-clients__text text">{item.text}</div>
										<div className="person-clients__name">{item.name}</div>
									</div>
								</SwiperSlide>

							})
						}
					</Swiper>
				</div>
			</section>
			<section className="person__bottom bottom">
				<h2 className="bottom__title title"><span>We're here</span><br /> For you</h2>
				<Link to='/appointment' className="bottom__button bbtn">Make an appointment</Link>
			</section>
		</main>
	)
}
