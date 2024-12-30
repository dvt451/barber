import React, { useContext, useEffect } from 'react'
import member1 from '../../img/member1.webp'
import member2 from '../../img/member2.webp'
import member3 from '../../img/member3.webp'
import member4 from '../../img/member4.webp'
import { IoLogoFacebook } from 'react-icons/io'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { MyContext } from '../../App'
import Persons from '../../Components/Persons'
import AOS from "aos";


export default function Meetteam() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			offset: 0,
			easing: 'ease',
		});
	}, [])

	const _ = useContext(MyContext)
	// Persons.length = 4
	return (
		<section className="home__team home-team">
			<div className="home-team__container">
				<div className="home-team__socials home-team-socials">
					<div data-aos="zoom-in-up" className="home-team-socials__title title"><span>MEET<br />THE</span> TEAM</div>
					<ul className="home-team-socials__list">
						<li data-aos="zoom-in-up" className="home-team-socials__items"><a href="#" className="home-team-socials__link bbtn"><IoLogoFacebook /></a></li>
						<li data-aos="zoom-in-up" className="home-team-socials__items"><a href="#" className="home-team-socials__link bbtn"><BsTwitter /></a></li>
						<li data-aos="zoom-in-up" className="home-team-socials__items"><a href="#" className="home-team-socials__link bbtn"><BsInstagram /></a></li>
						<li data-aos="zoom-in-up" className="home-team-socials__items"><a href="#" className="home-team-socials__link bbtn"><FaLinkedinIn /></a></li>
					</ul>
				</div>
				<div className="home-team__members team-members">
					<ul className="team-members__list">
						{
							Persons.slice(0, 4).map((item, i) => {
								return <li key={i} data-aos="zoom-in-up" className="team-members__items">
									<Link to={`/barber/${i + 1}`} className="team-members__member _ibg">
										<img src={item.pic} alt="" />
										<div className="team-members__context">
											<a href="#" className="team-members__name">{item.name}</a>
											<div className="team-members__text text">{item.text_short}</div>
											<a href="#" className="team-members__link link"><span>Read more</span><i className="fa fa-solid fa-chevron-right fa-shake"></i></a>
										</div>
										<div className="team-members__layer"></div>
									</Link>
								</li>
							})
						}
					</ul>
				</div>
			</div>
		</section>
	)
}
