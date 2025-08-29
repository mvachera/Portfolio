import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home'
import About from './About';
import Contact from './Contact'

function Accueil() {
	return (
		<div className="bg-black min-h-screen">
			<Header />
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