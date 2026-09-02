export interface BlogPost {
  id: number
  title: string
  excerpt: string
  slug: string
  featured?: boolean
  publishedAt?: string
  readTime?: number
  author?: string
  content?: string
}

export const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "Cómo optimizar el rendimiento en React",
    excerpt: "Técnicas avanzadas para mejorar el rendimiento de tus aplicaciones React usando memoización y lazy loading.",
    slug: "como-optimizar-rendimiento-react",
    featured: true
  },
  {
    id: 2,
    title: "Introducción a TypeScript",
    excerpt: "Guía completa para empezar con TypeScript y sus beneficios en el desarrollo web.",
    slug: "introduccion-typescript"
  },
  {
    id: 3,
    title: "Next.js 14: Novedades",
    excerpt: "Explorando las nuevas características de Next.js 14 y cómo migrar proyectos existentes.",
    slug: "nextjs-14-novedades"
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox",
    excerpt: "Cuándo usar cada uno y las mejores prácticas para layouts modernos.",
    slug: "css-grid-vs-flexbox"
  }
]
