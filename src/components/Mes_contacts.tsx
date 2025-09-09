import { Mail, FileDown, Github, Linkedin } from "lucide-react";

function Mes_contacts() {
	return (
		<div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-50 flex-wrap">
			<div className="bg-gray-900 rounded-r-lg shadow-lg p-3">
				<div className="flex flex-col space-y-8">
					<a
						href="cv.pdf"
						download
						className="text-gray-300 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full"
						title="CV"
					>
						<FileDown size={20} />
					</a>
					<a
						href="mailto:vacheratmatheo@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-300 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full"
						title="Email"
					>
						<Mail size={20} />
					</a>
					<a
						href="https://github.com/mvachera"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-300 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full"
						title="GitHub"
					>
						<Github size={20} />
					</a>
					<a
						href="https://www.linkedin.com/in/math%C3%A9o-vacherat-b99248348/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-300 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full"
						title="LinkedIn"
					>
						<Linkedin size={20} />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Mes_contacts;