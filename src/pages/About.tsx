function About() {
  return (
    <div className="min-h-screen text-white p-8 flex items-center">
      <div className="max-w-7xl mx-auto mt-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Section gauche - Skills & Experience */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-teal-300 mb-8">
                Skills &<br />
                Experience
              </h1>
              
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  After several years dedicated to football, I chose to reorient
                  myself towards another passion: programming. This transition
                  taught me to become self-taught and quickly adapt to new
                  technical challenges.
                </p>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  I started studying computer science in California before joining the{" "}
                  <span className="font-semibold text-teal-200">42 school</span> in Paris,
                  where I deepened my theoretical knowledge through a structured academic
                  approach. Today, I am a little more interested in the back-end than the
                  front-end, with a particular affinity for designing robust systems and
                  user experience.<br/>
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Visit my{" "}
                  <a 
                    href="https://www.linkedin.com/in/math%C3%A9o-vacherat-b99248348" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-teal-300 hover:underline"
                  >
                    LinkedIn
                  </a>{" "}
                  profile for more details or just{" "}
                  <a 
                    href="#contact" 
                    className="text-teal-300 hover:underline"
                  >
                    contact
                  </a>{" "}
                  me.
                </p>

              </div>

              {/* Barres de compétences techniques */}
              <div className="mt-8 space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Front-end</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1 overflow-hidden">
                    <div className="bg-gradient-to-r from-teal-300 to-teal-500 h-1 rounded-full
                    transition-all duration-2000 ease-out animate-pulse shadow-sm shadow-blue-400"
                    style={{width: '60%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Back-end</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1 overflow-hidden">
                    <div className="bg-gradient-to-r from-pink-300 to-pink-500 h-1 rounded-full
                    transition-all duration-2000 ease-out animate-pulse shadow-sm shadow-blue-400"
                    style={{width: '68%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">DevOps & Docker</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-300 to-blue-500 h-1 rounded-full
                    transition-all duration-2000 ease-out animate-pulse shadow-sm shadow-blue-400"
                    style={{width: '52%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Systèmes (C/C++, Linux)</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-300 to-orange-500 h-1 rounded-full
                    transition-all duration-2000 ease-out animate-pulse shadow-sm shadow-blue-400"
                    style={{width: '72%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section droite - Projets & Expériences */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Projets & Expériences
              </h2>
              
              <div className="bg-gray-800 rounded-lg p-5 mb-6 border-l-4 border-blue-300">
                <h3 className="text-xl font-semibold text-blue-200 mb-2">Cabrillo College</h3>
                <p className="text-gray-400 text-sm mb-3">2021 - 2022</p>
                <p className="text-gray-300">
                  Studies in computer science in California. Learning the fundamentals
                  of computing and discovering good development practices.
                </p>
              </div>
            </div>

              <div className="bg-gray-800 rounded-lg p-5 mb-6 border-l-4 border-teal-300">
                <h3 className="text-xl font-semibold text-teal-200 mb-2">42 school</h3>
                <p className="text-gray-400 text-sm mb-3">2023 - Present</p>
                <p className="text-gray-300">
                  Intensive training in project programming. Development of system
                  applications in C/C++, creation of a web server, and collaboration
                  on complex team projects.
                </p>
              </div>

            {/* Section compétences techniques détaillées */}
            <div className="bg-gray-800 rounded-lg p-5">
              <h3 className="text-2xl font-semibold text-white mb-4">Stack Technique</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-teal-200 mb-2">Languages</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• C/C++</li>
                    <li>• JavaScript/TypeScript</li>
                    <li>• Python</li>
                    <li>• Bash</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-pink-200 mb-2">Frameworks</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• React</li>
                    <li>• Express.js</li>
                    <li>• Django</li>
                    <li>• Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-200 mb-2">Tools</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Git/GitHub</li>
                    <li>• Docker</li>
                    <li>• Linux</li>
                    <li>• VS Code</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-200 mb-2">Others</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• PostgreSQL</li>
                    <li>• API REST</li>
                    <li>• OAuth2</li>
                    <li>• English</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;