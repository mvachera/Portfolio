import Mes_contacts from '../components/Mes_contacts';

function Home() {
	return (
		<div className="min-h-screen flex justify-center items-center space-x-6">
			<div className='hidden lg:block'>
				<Mes_contacts />
			</div>
			<div className="flex flex-col w-1/2">
				<h1 className="text-7xl font-bold text-white pb-3 font-extralight">Welcome</h1>
				<div className="relative pl-6">
					<div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-t from-yellow-400/80 to-transparent/10"></div>
						<p className="text-gray-300 text-lg leading-relaxed mb-4">
							Hi my name is Mathéo and I am a Full-Stack developer student at 42 School Paris.
						</p>
						<p className="text-gray-400 text-base leading-relaxed">
							Former high-level athlete turned into a passionate full-stack developer, 
							I combine rigor, team spirit, and creativity to build useful and sustainable applications.
						</p>
				</div>
			</div>
			<div className="p-8 pl-2">
				<h2 className="font-light text-2xl font-bold text-white pb-3 mb-2">Projects</h2>
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
					<div className="text-gray-400 hover:text-white cursor-pointer
						py-2 border-b border-gray-700 hover:border-yellow-400 transition-colors mt-2">
						<a href="#projects">Ft_transcendence</a>
					</div>
					<div className="text-gray-400 hover:text-white cursor-pointer
						py-2 border-b border-gray-700 hover:border-yellow-400 transition-colors mt-1">
						<a href="#projects">Matcha</a>
					</div>
					<div className="text-gray-400 hover:text-white cursor-pointer
						py-2 border-b border-gray-700 hover:border-yellow-400 transition-colors mt-1">
						<a href="#projects">Webserv</a>
					</div>
					<div className="text-gray-400 hover:text-white cursor-pointer
						py-2 border-b border-gray-700 hover:border-yellow-400 transition-colors mt-1">
						<a href="#projects">Inception</a>
					</div>
					<div className="text-gray-400 hover:text-white cursor-pointer
						py-2 border-b border-gray-700 hover:border-yellow-400 transition-colors mt-1">
						<a href="#projects">Ft_irc</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;