import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<nav className="bg-green-100 w-full flex justify-center space-x-6">
			<Link to="/">Accueil</Link>
			<Link to="/About">About</Link>
			<Link to="/Contact">Contact</Link>
			<Link to="/Projects">Projects</Link>
		</nav>
	)
}

export default Header;