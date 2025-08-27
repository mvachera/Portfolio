import Header from '../components/Header';
import Footer from '../components/Footer';
import reactLogo from '../assets/logo.svg';

function Accueil() {
	return (
		<div className="bg-black min-h-screen flex justify-center items-center">
			<Header />
			<img 
        		src={reactLogo} 
        		alt="background logo"
        		className="absolute w-98 h-96 opacity-20 animate-spin"
        		style={{ animationDuration: '20s' }}
      		/>
			<div className="flex flex-col w-3/5 pr-16">
				<h1 className="text-4xl font-bold text-white pb-3 font-extralight">Welcome</h1>
				<div className="relative pl-6">
					<div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-t from-yellow-400/80 to-transparent/10"></div>
						<p className="font-light text-gray-300 text-lg leading-relaxed mb-4">
							Je m'appelle Mathéo et je suis étudiant développeur Full-Stack à l'École 42.
						</p>
						<p className="font-light text-gray-400 text-base leading-relaxed">
							Passionné par le développement web et les technologies modernes, 
							j'ai développé une expertise en React, Django, et architecture serveur.
						</p>
				</div>
			</div>
			<div className="">
				<h2 className="font-extralight text-4xl font-bold text-white pb-3">Projects</h2>
				<div className="relative pl-6 pt-2">
					<div className="absolute left-0 top-2 h-full w-[2px] bg-gradient-to-b from-yellow-400/80 via-yellow-400/20 to-transparent"></div>
					<div className="absolute left-2 top-0 w-full h-[2px] bg-gradient-to-r from-yellow-400/80 via-yellow-400/20 to-transparent"></div>
					<svg className="absolute left-0 top-0" width="8" height="8" viewBox="0 0 8 8">
    					<path d="M8,0 A8,8 0 0 0 0,8"
    					      fill="none"
    					      stroke="rgba(250,204,21,0.8)" 
    					      strokeWidth="4"
    					      strokeLinecap="round" />
  					</svg>
					<div className="text-gray-400 hover:text-white cursor-pointer py-2 border-b border-gray-700 hover:border-yellow-400 transition-colors">
						Ft_transcendence
					</div>
					<div className="text-gray-400 hover:text-white cursor-pointer py-2 border-b border-gray-700 hover:border-yellow-400 transition-colors">
						Matcha
					</div>
					<div className="text-gray-400 hover:text-white cursor-pointer py-2 border-b border-gray-700 hover:border-yellow-400 transition-colors">
						Webserv
					</div>
					<div className="text-gray-400 hover:text-white cursor-pointer py-2 border-b border-gray-700 hover:border-yellow-400 transition-colors">
						Ft_irc
					</div>
					<div className="text-gray-400 hover:text-white cursor-pointer py-2 border-b border-gray-700 hover:border-yellow-400 transition-colors">
						Inception
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
export default Accueil;