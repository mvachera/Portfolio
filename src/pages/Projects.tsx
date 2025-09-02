function ProjectCard({ photo, description }: { photo: string; description: string }) {
  return (
    <div className="w-96 h-96 bg-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300
      transform hover:-translate-y-1 cursor-pointer border border-gray-200 overflow-hidden p-6">
      <div className="h-64 w-full flex justify-center items-center mb-2">
        <img src={photo} alt={description} className="max-w-full max-h-full object-contain rounded-lg" />
      </div>
      <div className="h-24 w-full flex items-center justify-center">
        <p className="text-sm text-gray-700 text-center leading-relaxed overflow-hidden mb-10">{description}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-16 px-8 mt-8">
      <div className="w-full max-w-6xl">
        {/* Ligne du haut - 2 projets */}
        <div className="flex justify-center gap-12 mb-16">
          <ProjectCard photo="ft_transcendence.png" description="End of course project
            combining a Pong game with modern web features (front-end and back-end),
            implementing advanced concepts such as WebSockets and OAuth2." />
          <ProjectCard photo="" description="" />
        </div>
        
        {/* Ligne du bas - 3 projets */}
        <div className="flex justify-center gap-12">
          <ProjectCard photo="" description="" />
          <ProjectCard photo="inception.png" description="Project based on Docker,
            consisting of orchestrating several containers to host a complete architecture
            including Nginx, MariaDB and WordPress." />
          <ProjectCard photo="ft_irc.png" description="Creation of an IRC server compliant
            with the RFC 1459 protocol, allowing real-time user, channel and message management." />

        </div>
      </div>
    </div>
  );
}

export default Projects;