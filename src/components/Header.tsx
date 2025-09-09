import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function Header() {
	return (
		<header className="bg-black fixed top-0 left-0 right-0 py-4 flex items-center justify-between px-4 flex-wrap">
			<a href="#home" className="flex iems-center">
    			<Avatar>
					<AvatarImage src="me.png" />
					<AvatarFallback>MV</AvatarFallback>
				</Avatar>
    			<span className="font-light text-white sans-extralight ml-2 mt-2
					hover:text-purple-900">Mathéo Vacherat</span>
			</a>
			<nav className="hidden sm:flex flex justify-center space-x-12 px-6 py-3">
				<a href="#home" className='flex items-center space-x-1'>
					<span className='text-gray-400 hover:text-purple-900'>Home</span>
				</a>
				<a href="#projects" className='flex items-center space-x-1'>
					<span className='text-gray-400 hover:text-purple-900'>Projects</span>
				</a>
				<a href="#about" className='flex items-center space-x-1'>
					<span className='text-gray-400 hover:text-purple-900'>About</span>
				</a>
				<a href="#contact" className='flex items-center space-x-1'>
					<span className='text-gray-400 hover:text-purple-900'>Contact</span>
				</a>
			</nav>
			{/* <div className="w-40"></div> */}
		</header>
	)
}

export default Header;