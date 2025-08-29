import React from 'react';
import { Link } from 'react-router-dom';
import { Home, HelpCircle, Mail, Rocket } from 'lucide-react';
import reactLogo from '../assets/logo.svg';

function Header() {
	return (
		<header className="fixed top-2 flex items-center justify-between w-full px-4">
			<div className="flex items-center">
    			<img 
    			    src={reactLogo} 
    			    alt="background logo"
    			    className="absolute w-24 h-24 opacity-20 animate-spin left-0"
    			    style={{ animationDuration: '20s' }}
    			/>
    			<span className="font-light text-white sans-extralight ml-16">Mathéo Vacherat</span>
			</div>
			<nav className="flex justify-center space-x-6 px-6 py-3">
				<a href="#home" className='flex items-center space-x-1'>
					<Home size={16} className='text-blue-500' />
					<span className='text-gray-400 hover:text-white'>Home</span>
				</a>
				<a href="#about" className='flex items-center space-x-1'>
					<HelpCircle size={16} className='text-green-500' />
					<span className='text-gray-400 hover:text-white'>About</span>
				</a>
				<a href="#contact" className='flex items-center space-x-1'>
					<Mail size={16} className='text-yellow-500' />
					<span className='text-gray-400 hover:text-white'>Contact</span>
				</a>
				<Link to="/Projects" className='flex items-center space-x-1'>
					<Rocket size={16} className='text-purple-500' />
					<span className='text-gray-400 hover:text-white'>Projects</span>
				</Link>
			</nav>
			<div className="w-40"></div>
		</header>
	)
}

export default Header;