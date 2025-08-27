import { Mail, Github, Linkedin } from "lucide-react";

function Footer() {
	return (
		<footer className="bg-transparent w-full fixed bottom-2 flex justify-between items-center px-8">
			<div>
				<span className="text-gray-300 text-sm">© 2025</span>
			</div>
			<div className="flex space-x-4">
				<a
            		href="mailto:vacheratmatheo@gmail.com"
            		target="_blank"
            		rel="noopener noreferrer"
            		className="text-gray-300 hover:text-gray-300 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full"
            		title="Email"
          		>
            		<Mail size={20} />
          		</a>
          		<a
            		href="https://github.com/mvachera"
            		target="_blank"
            		rel="noopener noreferrer"
            		className="text-gray-300 hover:text-gray-300 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full"
            		title="GitHub"
          		>
            		<Github size={20} />
          		</a>
          
          		<a
            		href="https://www.linkedin.com/in/math%C3%A9o-vacherat-b99248348/"
            		target="_blank"
            		rel="noopener noreferrer"
            		className="text-gray-300 hover:text-white-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full"
            		title="LinkedIn"
          		>
            		<Linkedin size={20} />
          		</a>
			</div>
		</footer>
	)
}

export default Footer;