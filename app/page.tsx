import { fetchPosts } from '../lib/api'
import { BlogPost } from '../lib/posts'

interface HomePageProps {}

export default async function HomePage({}: HomePageProps) {
  const posts = await fetchPosts()
  const featuredPost = posts.find(post => post.featured)
  const regularPosts = posts.filter(post => !post.featured).slice(0, 3)

  return (
    <main className="container mx-auto px-4 py-12 space-y-16">
        {/* About Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=entropy&auto=format" 
              alt="Developer working on code" 
              className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="grid grid-cols-3 gap-2">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=150&fit=crop&crop=entropy&auto=format" 
                alt="Code development" 
                className="w-full h-20 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=200&h=150&fit=crop&crop=entropy&auto=format" 
                alt="Web development" 
                className="w-full h-20 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=200&h=150&fit=crop&crop=entropy&auto=format" 
                alt="Programming" 
                className="w-full h-20 object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">About me</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Soy un desarrollador apasionado por crear experiencias web excepcionales. 
              Con especialización en React y Node.js, me enfoco en construir aplicaciones 
              modernas y escalables.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Mi experiencia abarca desde el desarrollo frontend hasta backend, 
              siempre buscando las mejores prácticas y las últimas tecnologías 
              para ofrecer soluciones innovadoras.
            </p>
            <div className="grid grid-cols-2 gap-4 my-6">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop&crop=entropy&auto=format" 
                alt="React development" 
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=200&fit=crop&crop=entropy&auto=format" 
                alt="Node.js development" 
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Disfruto trabajando en equipo y compartiendo conocimiento con la comunidad. 
              Creo que el código limpio y la arquitectura bien diseñada son clave para el éxito.
            </p>
            <a 
              href="/about" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg"
            >
              Ver más
            </a>
          </div>
        </section>

        {/* Blog Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Blog</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Featured Post */}
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=entropy&auto=format" 
              alt="Programming code and development" 
              className="w-full h-72 md:h-80 object-cover rounded-2xl shadow-xl"
            />
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {featuredPost?.title}
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                {featuredPost?.excerpt}
              </p>
              <a 
                href={`/blog/${featuredPost?.slug}`}
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg"
              >
                Leer más
              </a>
            </div>
          </div>

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {regularPosts.map((post) => (
              <article key={post.id} className="flex space-x-3">
                <img 
                  src={
                    post.id === 2 ? "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=100&h=100&fit=crop&crop=entropy&auto=format" :
                    post.id === 3 ? "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop&crop=entropy&auto=format" :
                    post.id === 4 ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=entropy&auto=format" :
                    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop&crop=entropy&auto=format"
                  } 
                  alt={`${post.title} thumbnail`} 
                  className="flex-shrink-0 w-14 h-14 object-cover rounded-lg"
                />
                <div className="flex-1 space-y-1">
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-xs">
                    {post.excerpt}
                  </p>
                  <a 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 text-xs font-medium"
                  >
                    Leer más
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
  )
}
