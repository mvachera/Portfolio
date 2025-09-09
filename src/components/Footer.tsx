import { Mail, FileDown, Github, Linkedin } from "lucide-react";

function Footer() {
	return (
		<footer className="bg-black w-full absolute bottom-0 flex flex-col lg:flex-row
			justify-center lg:justify-between items-center p-2 lg:mr-4 space-y-2
			lg:space-y-0">
			<div>
				<span className="text-gray-300 text-sm ml-2">© 2025 vacheratmatheo@gmail.com</span>
			</div>
			<div className="bg-gray-900 rounded-lg shadow-lg
				p-3 flex justify center items-center space-x-6">
				<a
					href="cv.pdf"
					download
					className="text-gray-300 hover:text-white
						transition-colors duration-200 p-2
						hover:bg-gray-800 rounded-full"
					title="CV"
				>
					<FileDown size={20} />
				</a>
				<a
					href="mailto:vacheratmatheo@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-300 hover:text-white
						transition-colors duration-200 p-2
						hover:bg-gray-800 rounded-full"
					title="Email"
				>
					<Mail size={20} />
				</a>
				<a
					href="https://github.com/mvachera"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-300 hover:text-white
						transition-colors duration-200 p-2
						hover:bg-gray-800 rounded-full"
					title="GitHub"
				>
					<Github size={20} />
				</a>
				<a
					href="https://www.linkedin.com/in/math%C3%A9o-vacherat-b99248348/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-300 hover:text-white
						transition-colors duration-200 p-2
						hover:bg-gray-800 rounded-full"
					title="LinkedIn"
				>
					<Linkedin size={20} />
				</a>
			</div>
		</footer>
	)
}

export default Footer;