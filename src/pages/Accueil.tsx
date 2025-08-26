import Header from '../components/Header';

function Accueil() {
	return (
		<div>
			<Header />
			<div className="bg-blue-100 min-h-screen flex flex-col justify-center items-center">
				<h1 className="text-4xl font-bold text-gray-800">Mathéo Vacherat</h1>
				<h2 className="text-4xl text-gray-600 mt-2">Développeur Full-Stack</h2>
				<p className="text-lg text-gray-600 mt-4 text-center max-w-2xl">"Étudiant développeur 
					Full-Stack à l'École 42, passionné par le développement web et les technologies modernes"</p>
			</div>
		</div>
	)
}
export default Accueil;