import Header from '../components/Header';
import Home from './Home'
import About from './About';
import Contact from './Contact'
import Projects from './Projects';

function Accueil() {
	return (
		<div className="bg-gray-950">
			<Header />
			<section id='home'>
				<Home />
			</section>
			<section id='projects'>
				<Projects />
			</section>
			<section id='about'>
				<About />
			</section>
			<section id='contact'>
				<Contact />
			</section>
		</div>
	)
}
export default Accueil;