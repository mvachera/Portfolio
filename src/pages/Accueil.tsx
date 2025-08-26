import Header from '../components/Header';
import reactLogo from '../assets/logo.svg';

function Accueil() {
	return (
		<div>
			<div className="bg-black min-h-screen flex flex-col justify-center items-center bg-cover bg-center">
				<img 
        			src={reactLogo} 
        			alt="background logo"
        			className="absolute w-98 h-96 opacity-20 animate-spin"
        			style={{ animationDuration: '20s' }}
      			/>
				<Header />
				<h1 className="text-4xl font-bold text-white">Mathéo Vacherat</h1>
				<h2 className="text-4xl text-white mt-2">Développeur Full-Stack</h2>
				<p className="text-lg text-white mt-4 text-center max-w-2xl">Étudiant développeur 
					Full-Stack à l'École 42, passionné par le développement web et les technologies modernes.</p>
			</div>
		</div>
	)
}
export default Accueil;