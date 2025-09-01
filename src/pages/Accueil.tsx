import Header from '../components/Header';
import Footer from '../components/Footer';
import Mes_contacts from '../components/Mes_contacts';
import Home from './Home'
import About from './About';
import Contact from './Contact'

function Accueil() {
	return (
		<div className="bg-gray-950 min-h-screen">
			<Header />
			<Mes_contacts />
			<section id='home'>
				<Home />
			</section>
			<section id='about'>
				<About />
			</section>
			<section id='contact'>
				<Contact />
			</section>
			<Footer />
		</div>
	)
}
export default Accueil;