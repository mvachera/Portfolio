function About() {
	return (
		<div className="min-h-screen flex justify-center items-center">
			<div className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-300">Mon parcours</h2>
          <p className="text-gray-300">
            Après plusieurs années consacrées au football de haut niveau, j’ai choisi
            de me réorienter vers une autre passion : la programmation. Cette
            transition m’a appris l’importance de la discipline, de l’endurance et
            surtout de l’apprentissage continu.
          </p>
          <p className="text-gray-300">
            J’ai étudié l’informatique en Californie avant de rejoindre{" "}
            <span className="font-semibold">l’École 42</span> à Paris, où j’ai appris
            à coder en autonomie à travers des projets concrets. Aujourd’hui, je
            m’intéresse autant au back-end qu’au front-end, avec une affinité
            particulière pour la conception de systèmes robustes et l’expérience
            utilisateur.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-teal-200 mb-2">
              Compétences techniques
            </h2>
            <ul className="space-y-1 text-gray-300">
              <li>Langages : C, C++, Python, JavaScript/TypeScript, Bash</li>
              <li>Frameworks : React, Express, Django</li>
              <li>Outils : Linux, Docker, Git</li>
              <li>Base de données : PostgreSQL</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-yellow-300 mb-2">
              Centres d’intérêt
            </h2>
            <ul className="space-y-1 text-gray-300">
              <li>⚽ Football — esprit d’équipe et gestion de la performance</li>
              <li>🌍 Voyages — 1 an en Californie, ouverture et adaptabilité</li>
              <li>💡 Tech — apprendre en continu et créer des projets utiles</li>
            </ul>
          </div>
        </div>
		</div>
	)
}

export default About;