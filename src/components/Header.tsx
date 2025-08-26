import React from 'react';
import { Link } from 'react-router-dom';
import { Home, HelpCircle, Mail, Rocket } from 'lucide-react';

function Header() {
	return (
		<nav className="fixed top-2 flex justify-center space-x-6 px-6 py-3">
			<Link to="/" className='flex items-center space-x-1'>
				<Home size={16} className='text-blue-500' />
				<span className='text-white'>Home</span>
			</Link>
			<Link to="/About" className='flex items-center space-x-1'>
				<HelpCircle size={16} className='text-green-500' />
				<span className='text-white'>About</span>
			</Link>
			<Link to="/Contact" className='flex items-center space-x-1'>
				<Mail size={16} className='text-yellow-500' />
				<span className='text-white'>Contact</span>
			</Link>
			<Link to="/Projects" className='flex items-center space-x-1'>
				<Rocket size={16} className='text-purple-500' />
				<span className='text-white'>Projects</span>
			</Link>
		</nav>
	)
}

export default Header;