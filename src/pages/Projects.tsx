function ProjectCard({ photo, description, technologies }:
  { photo: string; description: string; technologies?: string[] }) {
  return (
    <div className="group relative bg-gray-300 rounded-2xl
      overflow-hidden shadow-xl hover:shadow-2xl transition-all
      duration-500 transform hover:-translate-y-3 cursor-pointer
      w-80 h-80">

      <div className="flex justify-between">
        {/* Image Container */}
        <div className="relative overflow-hidden w-44 h-44 mt-4">
          <img 
            src={photo} 
            alt={"NULL"} 
            className="w-full h-full transition-transform
            duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content Container */}
        <div className="p-4 w-1/2 h-44 ">
          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800
                  text-xs font-medium rounded-full border
                  border-blue-200 hover:bg-blue-200 transition-colors
                  duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="flex items-center justify-center h-1/2">
      <p className="text-gray-600 text-sm leading-relaxed
        line-clamp-4 flex mx-4 mb-8">
        {description}
      </p>
      </div>

      {/* Hover border effect */}
      <div className="absolute inset-0 rounded-2xl border-2
        border-red-400 group-hover:border-blue-400
        transition-colors duration-300"></div>
    </div>
  );
}

function Projects() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">PROJECTS</h1>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-6 rounded-lg"></div>
          <p className="text-gray-300 text-lg max-w-lg mx-auto">
            Here you will find 5 of my projects coded for school 42 !
          </p>
        </div>
        
        {/* Ligne du haut - 2 projets */}
        <div className="flex justify-center gap-12 mb-16 flex-wrap">
          <ProjectCard 
            photo="ft_transcendence.png"
            description="End of course project combining a Pong game with
              modern web features (front-end and back-end),
              implementing advanced concepts such as WebSockets and OAuth2."
            technologies={["Django", "Vanilla JavaScript", "Python", "JavaScript", "PostgreSQL"]} />
          <ProjectCard
            photo="matcha.png"
            description="Dating site with profiles, matching, geolocation and interests,
              to facilitate meetings between users. The objective is to promote exchanges
              and meetings by highlighting what users have in common."
            technologies={["JavaScript / TypeScript", "React", "Express", "PostgreSQL"]} />
        </div>
        
        {/* Ligne du bas - 3 projets */}
        <div className="flex justify-center gap-12 flex-wrap">
          <ProjectCard
            photo="webserv.png"
            description="Implementation of an RFC 2616 compliant HTTP server,
              supporting GET, POST and DELETE requests, as well as CGI,
              error handling and concurrent connections."
            technologies={["C++", "HTTP", "CGI", "HTML / CSS", "Sockets"]} />
          <ProjectCard
            photo="inception.png"
            description="Project based on Docker, consisting of orchestrating
              several containers to host a complete architecture including Nginx,
              MariaDB and WordPress."
            technologies={["Docker", "Docker Compose", "Nginx", "Wordpress", "MariaDB"]} />
          <ProjectCard
            photo="ft_irc.png"
            description="Creation of an IRC server compliant with the RFC 1459 protocol,
              allowing user, channel and message management, and putting into practice
              the concepts of network and communication via sockets."
            technologies={["C++", "Sockets"]} />
        </div>
    </div>
  );
}

export default Projects;