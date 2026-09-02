import { notFound } from 'next/navigation'
import { fetchPostBySlug, fetchPosts } from '../../../lib/api'
import { BlogPost } from '../../../lib/posts'

interface BlogPostPageProps {
  params: { slug: string }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await fetchPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  // Obtener posts relacionados (excluyendo el post actual)
  const allPosts = await fetchPosts()
  const relatedPosts = allPosts
    .filter((p: BlogPost) => p.id !== post.id)
    .slice(0, 6) // Tomar los primeros 6 posts relacionados

  return (
    <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Hero Section - Hero ancho */}
        <section className="w-full">
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=400&fit=crop&crop=entropy&auto=format" 
            alt="Programming code and development" 
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
          />
        </section>

        {/* Post Title & Meta */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {post.title}
          </h1>
          <div className="text-gray-600 text-lg">
            Por {post.author} • {post.publishedAt} • {post.readTime} min read
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
          </div>
        </section>

        {/* Related Posts Grid - 2 columnas × 3 filas */}
        <section className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost: BlogPost) => (
              <article key={relatedPost.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Miniatura cuadrada arriba */}
                <img 
                  src={
                    relatedPost.id === 2 ? "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=400&fit=crop&crop=entropy&auto=format" :
                    relatedPost.id === 3 ? "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=400&fit=crop&crop=entropy&auto=format" :
                    relatedPost.id === 4 ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=entropy&auto=format" :
                    relatedPost.id === 5 ? "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop&crop=entropy&auto=format" :
                    relatedPost.id === 6 ? "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=400&fit=crop&crop=entropy&auto=format" :
                    relatedPost.id === 7 ? "https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit=crop&crop=entropy&auto=format" :
                    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&crop=entropy&auto=format"
                  } 
                  alt={`${relatedPost.title} thumbnail`} 
                  className="w-full aspect-square object-cover"
                />
                {/* Contenido abajo */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {relatedPost.excerpt}
                  </p>
                  <a 
                    href={`/blog/${relatedPost.slug}`}
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
