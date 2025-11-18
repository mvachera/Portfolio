import { useState, useEffect } from 'react';
import Mes_contacts from '../components/Mes_contacts';

const useScreenSize = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isDesktop;
};

function getHref(mobile: string, desktop: string, isDesktop: boolean): string { 
  return isDesktop ? desktop : mobile;
}

function Home() {
	const isDesktop = useScreenSize();

	return (
		<div id="home" className="min-h-screen flex flex-col lg:flex-row justify-center
			items-center lg:space-x-6 px-4 lg:px-0 py-8 lg:py-0 mt-16 sm:mt-8 lg:mt-0">
			<div className='hidden lg:block'>
				<Mes_contacts />
			</div>
			<div className="flex flex-col w-full lg:w-1/2 text-center lg:text-left mb-8
				lg:mb-0">
				<h1 className="text-4xl sm:text-5xl lg:text-7xl text-white pb-3
					font-extralight">
					Welcome
				</h1>
				<div className="relative pl-0 lg:pl-6">
					{/* Ligne gradient - visible seulement sur desktop */}
					<div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-t
						from-yellow-400/80 to-transparent/10 hidden lg:block"></div>
					
					<p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-4 px-4 lg:px-0">
						Hi my name is Mathéo and I am a Full-Stack developer student at 42 School Paris.
					</p>
					<p className="text-gray-400 text-sm lg:text-base leading-relaxed px-4 lg:px-0">
						Former high-level athlete turned into a passionate full-stack developer, 
						I combine rigor, team spirit, and creativity to build useful and sustainable applications.
					</p>
				</div>
			</div>
			<div className="w-full lg:w-auto lg:p-8 lg:pl-2 px-4">
				<h2 className="font-light text-xl lg:text-2xl text-white pb-3 mb-2
					text-center lg:text-left">
					Projects
				</h2>
				<div className="relative pl-0 lg:pl-6 pt-2">
					
					{/* Éléments décoratifs - visibles seulement sur desktop */}
					<div className="absolute left-0 top-2 h-full w-[2px] bg-gradient-to-b
						from-yellow-400/80 via-yellow-400/20 to-transparent hidden lg:block"></div>
					<div className="absolute left-2 top-0 w-full h-[2px] bg-gradient-to-r
						from-yellow-400/80 via-yellow-400/20 to-transparent hidden lg:block"></div>
					<svg className="absolute left-0 top-0 hidden lg:block" width="8" height="8" viewBox="0 0 8 8">
						<path d="M8,0 A8,8 0 0 0 0,8"
							  fill="none"
							  stroke="rgba(250,204,21,0.8)" 
							  strokeWidth="4"
							  strokeLinecap="round" />
					</svg>
					<div className="space-y-3 lg:space-y-1">
						<div className="text-gray-400 hover:text-white cursor-pointer 
							py-3 lg:py-2 border-b border-gray-700 hover:border-yellow-400 transition-colors 
							text-center lg:text-left lg:mt-1">
							<a href={getHref('#justdoit', '#projects', isDesktop)}>JustDoIt</a>
						</div>
						<div className="text-gray-400 hover:text-white cursor-pointer 
							py-3 lg:py-2 border-b border-gray-700 hover:border-yellow-400 transition-colors 
							text-center lg:text-left lg:mt-2">
							<a href={getHref('#ft_transcendence', '#projects', isDesktop)}>Ft_transcendence</a>
						</div>
						<div className="text-gray-400 hover:text-white cursor-pointer 
							py-3 lg:py-2 border-b border-gray-700 hover:border-yellow-400 transition-colors 
							text-center lg:text-left lg:mt-1">
							<a href={getHref('#webserv', '#projects', isDesktop)}>Webserv</a>
						</div>
						<div className="text-gray-400 hover:text-white cursor-pointer 
							py-3 lg:py-2 border-b border-gray-700 hover:border-yellow-400 transition-colors 
							text-center lg:text-left lg:mt-1">
							<a href={getHref('#inception', '#projects', isDesktop)}>Inception</a>
						</div>
						<div className="text-gray-400 hover:text-white cursor-pointer 
							py-3 lg:py-2 border-b border-gray-700 hover:border-yellow-400 transition-colors 
							text-center lg:text-left lg:mt-1">
							<a href={getHref('#ft_irc', '#projects', isDesktop)}>Ft_irc</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;