import { fetchPosts } from '../../lib/api'
import { BlogPost } from '../../lib/posts'

interface BlogPageProps {}

export default async function BlogPage({}: BlogPageProps) {
  const posts = await fetchPosts()
  const featuredPost = posts[0] // Primer post como destacado
  const gridPosts = posts.slice(1, 7) // Siguientes 6 posts para la grilla

  return (
    <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Hero Destacado - Imagen izquierda, contenido derecha */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=entropy&auto=format" 
              alt="Programming code and development" 
              className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <div className="text-sm text-gray-500 font-medium">
              {featuredPost.publishedAt} • {featuredPost.readTime} min read
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {featuredPost.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {featuredPost.excerpt}
            </p>
            <a 
              href={`/blog/${featuredPost.slug}`}
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg"
            >
              Leer más
            </a>
          </div>
        </section>

        {/* Grid de Posts - 2 columnas × 3 filas */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Más artículos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {gridPosts.map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Miniatura cuadrada */}
                <img 
                  src={
                    post.id === 2 ? "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=400&fit=crop&crop=entropy&auto=format" :
                    post.id === 3 ? "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=400&fit=crop&crop=entropy&auto=format" :
                    post.id === 4 ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=entropy&auto=format" :
                    post.id === 5 ? "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop&crop=entropy&auto=format" :
                    post.id === 6 ? "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=400&fit=crop&crop=entropy&auto=format" :
                    post.id === 7 ? "https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit=crop&crop=entropy&auto=format" :
                    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&crop=entropy&auto=format"
                  } 
                  alt={`${post.title} thumbnail`} 
                  className="w-full aspect-square object-cover"
                />
                {/* Contenido */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <a 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Leer →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
  )
}
