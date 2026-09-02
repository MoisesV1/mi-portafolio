interface AboutPageProps {}

interface Project {
  id: number
  title: string
  description: string
  imageUrl: string
}

interface Talk {
  id: number
  title: string
  description: string
  imageUrl: string
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Tienda online con React y Node.js",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=entropy&auto=format"
  },
  {
    id: 2,
    title: "Task Manager",
    description: "App de gestión de tareas con Next.js",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=entropy&auto=format"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Dashboard del clima en tiempo real",
    imageUrl: "/images/weather-dashboard.svg"
  },
  {
    id: 4,
    title: "Social Network",
    description: "Red social para desarrolladores",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&crop=entropy&auto=format"
  }
]

const mockTalks: Talk[] = [
  {
    id: 1,
    title: "React Performance Tips",
    description: "Técnicas para optimizar aplicaciones React y mejorar el rendimiento del usuario.",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=150&fit=crop&crop=entropy&auto=format"
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    description: "Guía completa para escribir código TypeScript robusto y mantenible en proyectos grandes.",
    imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=200&h=150&fit=crop&crop=entropy&auto=format"
  }
]

export default function AboutPage({}: AboutPageProps) {
  return (
    <main className="container mx-auto px-4 py-12 space-y-16">
        {/* About me Section - 2 columnas desktop */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=entropy&auto=format" 
              alt="Profile photo of DevPortfolio developer" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About me</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Soy un desarrollador apasionado por crear experiencias web excepcionales. 
              Con especialización en React y Node.js, me enfoco en construir aplicaciones 
              modernas y escalables.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mi experiencia abarca desde el desarrollo frontend hasta backend, 
              siempre buscando las mejores prácticas y las últimas tecnologías 
              para ofrecer soluciones innovadoras.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Disfruto trabajando en equipo y compartiendo conocimiento con la comunidad. 
              Creo que el código limpio y la arquitectura bien diseñada son clave para el éxito.
            </p>
            <a 
              href="mailto:contact@example.com" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg"
            >
              Contactar
            </a>
          </div>
        </section>

        {/* Projects Section - Grilla 4 columnas desktop, 2 columnas móvil */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Projects</h2>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
            {mockProjects.map((project) => (
              <article key={project.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Talks Section - 2 tarjetas horizontales desktop, apiladas móvil */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Talks</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {mockTalks.map((talk) => (
              <article key={talk.id} className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0">
                  <img 
                    src={talk.imageUrl} 
                    alt={talk.title} 
                    className="w-full md:w-32 h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{talk.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{talk.description}</p>
                  <a 
                    href="#" 
                    className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Ver charla →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
  )
}
