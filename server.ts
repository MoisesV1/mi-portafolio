import { mockPosts } from './lib/posts'

const postDetails: Record<number, { publishedAt: string; readTime: number; content: string }> = {
  1: {
    publishedAt: "2024-03-15",
    readTime: 8,
    content: `
      <p>El rendimiento es crucial para la experiencia del usuario. En React, hay varias estrategias clave para asegurar que tus aplicaciones sean rápidas y responsivas.</p>
      <p>La memoización es una técnica de optimización que almacena en caché el resultado de funciones costosas y devuelve el resultado almacenado cuando las mismas entradas se producen de nuevo.</p>
      <p>React.memo es un componente de orden superior que memoriza el renderizado de un componente funcional. Si sus props no cambian, React reutiliza el último resultado renderizado.</p>
      <p>Para funciones y valores, puedes usar useCallback y useMemo respectivamente. useCallback memoriza la función en sí, mientras que useMemo memoriza el valor resultante de una función.</p>
      <p>El lazy loading permite cargar componentes solo cuando son necesarios, lo que reduce el tamaño inicial del bundle de tu aplicación y mejora el tiempo de carga.</p>
      <p>Para listas con muchos elementos, considera usar virtualización. Librerías como react-window o react-virtualized renderizan solo los elementos visibles en la pantalla.</p>
      <p>Las imágenes son a menudo el mayor contribuyente al tamaño de una página. Usa formatos modernos como WebP, implementa lazy loading y considera usar un CDN.</p>
      <p>Estas técnicas te ayudarán a crear aplicaciones React más rápidas y eficientes. Recuerda siempre medir el rendimiento antes y después de aplicar optimizaciones.</p>
    `
  },
  2: {
    publishedAt: "2024-03-10",
    readTime: 12,
    content: `
      <p>TypeScript es un superconjunto de JavaScript que añade tipado estático y otras características que mejoran el desarrollo de aplicaciones web.</p>
      <p>TypeScript fue desarrollado por Microsoft y compila a JavaScript. Añade tipos estáticos, interfaces, enums y otras características que no están disponibles en JavaScript nativo.</p>
      <p>El tipado estático permite detectar errores en tiempo de desarrollo en lugar de runtime.</p>
      <p>Los IDEs pueden ofrecer mejor autocompletado y refactorización gracias a los tipos.</p>
      <p>Los tipos sirven como documentación viviente del código, haciendo más fácil entender y mantener grandes bases de código.</p>
      <p>Para empezar con TypeScript, instala el paquete, crea un archivo tsconfig.json y renombra tus archivos .js a .ts.</p>
      <p>TypeScript hace tu código más robusto y mantenible. Es una excelente inversión para proyectos a mediano y grande escala.</p>
    `
  },
  3: {
    publishedAt: "2024-03-05",
    readTime: 6,
    content: `
      <p>Next.js 14 trae varias mejoras significativas que hacen el desarrollo más eficiente y las aplicaciones más rápidas.</p>
      <p>Turbopack ahora es el bundler por defecto en desarrollo, ofreciendo hasta 53% más de rapidez en el inicio del servidor.</p>
      <p>Las Server Actions ahora son más estables y eficientes, permitiendo mejor manejo de formularios y mutaciones de datos.</p>
      <p>El componente Image ahora tiene mejor rendimiento y soporte para formatos modernos.</p>
      <p>Next.js 14 continúa mejorando la experiencia de desarrollo y el rendimiento de las aplicaciones.</p>
    `
  },
  4: {
    publishedAt: "2024-02-28",
    readTime: 10,
    content: `
      <p>CSS Grid y Flexbox son dos herramientas poderosas para crear layouts modernos. Cada uno tiene sus fortalezas y casos de uso ideales.</p>
      <p>Flexbox es ideal para alinear elementos en una dimensión, distribuir espacio entre elementos y crear componentes como navegaciones o tarjetas.</p>
      <p>CSS Grid es perfecto para layouts complejos de dos dimensiones, diseños de página completos y cuando necesitas control preciso sobre filas y columnas.</p>
      <p>Lo mejor es usar ambos juntos: Grid para el layout general y Flexbox para componentes específicos.</p>
      <p>Conocer ambas herramientas te permitirá crear layouts más eficientes y mantenibles.</p>
    `
  }
}

const postsWithDetails = mockPosts.map(post => {
  const details = postDetails[post.id] || {
    publishedAt: "2024-02-20",
    readTime: 15,
    content: `
      <p>El manejo de estado es crucial en aplicaciones React. Hay varias opciones, cada una con sus ventajas.</p>
      <p>Context API es built-in en React, ideal para estado global simple y aplicaciones pequeñas a medianas.</p>
      <p>Redux es potente y predecible, ideal para aplicaciones grandes con estado complejo.</p>
      <p>Zustand es minimalista y fácil de usar, excelente para la mayoría de casos de uso.</p>
      <p>Elige la herramienta que mejor se adapte al tamaño y complejidad de tu aplicación.</p>
    `
  }
  
  return {
    ...post,
    ...details,
    author: "DevPortfolio"
  }
})

const server = Bun.serve({
  port: 3001,
  routes: {
    "/": {
      GET: () => Response.json({ posts: postsWithDetails }),
    },
    "/posts": {
      GET: () => Response.json({ posts: postsWithDetails }),
    },
  },
  fetch(req: Request) {
    return new Response("Not Found", { status: 404 })
  },
})

console.log(`servidor bun.js ejecutandose en http://localhost:${server.port}`)