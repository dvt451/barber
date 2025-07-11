import React, { useState } from 'react'

export default function DvtBadge() {
	const [isHovered, setIsHovered] = useState(false);
	const isMobile = window.innerWidth <= 768;
	const dvtStyle = {
		position: 'fixed',
		top: '50%',
		left: 0,
		color: '#fff',
		zIndex: 90,
		backgroundColor: '#70927b', // Replace with actual color of --primary
		transform: `translateY(-50%) translateX(${isHovered ? '0' : '-1.5rem'}) rotate(180deg)`,
		writingMode: 'vertical-rl',
		display: isMobile ? 'none' : 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '20px 10px 25px 10px',
		fontSize: '27px',
		opacity: isHovered ? 1 : 0.7,
		transition: 'all 0.3s ease',
		border: '1px solid #fff',
		borderRight: 'none',
		textDecoration: 'none',
	};
	const dvtLineTop = {
		position: 'absolute',
		width: '1px',
		height: isHovered ? '78%' : '0%',
		top: 0,
		left: '9px',
		backgroundColor: '#fff',
		transform: 'translate(0,17px)',
		transition: 'height 0.3s ease 0.1s',
	};
	const dvtLineBottom = {
		position: 'absolute',
		width: '1px',
		height: isHovered ? '78%' : '0%',
		top: 0,
		right: '9px',
		backgroundColor: '#fff',
		transform: 'translate(0,18px)',
		transition: 'height 0.3s ease 0.1s',
	}
	const dvtSpanStyle = {
		marginBottom: '60px',
		fontFamily: 'var(--font-family)',
		fontWeight: '500',
	};
	return (
		<a
			target='_blank'
			href='https://dvt-ten.vercel.app'
			id="dvt"
			style={dvtStyle}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<span style={dvtLineTop}></span>
			<span style={dvtSpanStyle}>@ dvt</span>
			<span style={dvtLineBottom}></span>
			<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 160 160" fill="none"><path d="M103.776 82.4382H25L47.7287 107.492H81.8219L73.5569 119.115L68.7831 125.184L83.8882 143.393L115.399 107.492L103.776 82.4382Z" fill="#fff"></path><path d="M60.7941 74.6592H135.311L113.811 50.9601H81.5612L89.3793 39.9658L94.1435 33.3364L79.6066 16.9999L49.7998 50.9601L60.7941 74.6592Z" fill="#fff"></path></svg>
		</a>
	)
}
