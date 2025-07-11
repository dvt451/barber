import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home/Home';
import "swiper/css";
import './css/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, createContext, useState } from 'react';
import Services from './Pages/Services/Services';
import Contacts from './Pages/Contacts/Contacts';
import About from './Pages/About/About';
import Team from './Pages/Team/Team';
import Person from './Pages/Person/Person';
import Appointment from './Pages/Appointment/Appointment';
import 'aos/dist/aos.css'
import DvtBadge from './Components/DvtBadge';

export const MyContext = createContext()

//========================================================================================================================================================
function App() {
	const [catching, setCatching] = useState(0)

	const _ = {
		catching,
		setCatching,
	}
	return (
		<MyContext.Provider value={_}>
			<div className="wrapper">
				<Router >
					<DvtBadge />
					<Header />
					<Routes >
						<Route path='/' element={<Home />} />
						<Route path='/services' element={<Services />} />
						<Route path='/contacts' element={<Contacts />} />
						<Route path='/about' element={<About />} />
						<Route path='/team' element={<Team />} />
						<Route path='/barber/:id' element={<Person />} />
						<Route path='/appointment' element={<Appointment />} />
					</Routes>
					<Footer />
				</Router>
			</div>
		</MyContext.Provider>
	);
}

export default App;