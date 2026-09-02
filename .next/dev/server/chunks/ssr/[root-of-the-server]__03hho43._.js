module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPostPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
const mockBlogPosts = [
    {
        id: 1,
        title: "Cómo optimizar el rendimiento en React",
        excerpt: "Técnicas avanzadas para mejorar el rendimiento de tus aplicaciones React usando memoización y lazy loading.",
        slug: "como-optimizar-rendimiento-react",
        publishedAt: "2024-03-15",
        readTime: 8,
        author: "DevPortfolio",
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
    {
        id: 2,
        title: "Introducción a TypeScript",
        excerpt: "Guía completa para empezar con TypeScript y sus beneficios en el desarrollo web.",
        slug: "introduccion-typescript",
        publishedAt: "2024-03-10",
        readTime: 12,
        author: "DevPortfolio",
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
    {
        id: 3,
        title: "Next.js 14: Novedades",
        excerpt: "Explorando las nuevas características de Next.js 14 y cómo migrar proyectos existentes.",
        slug: "nextjs-14-novedades",
        publishedAt: "2024-03-05",
        readTime: 6,
        author: "DevPortfolio",
        content: `
      <p>Next.js 14 trae varias mejoras significativas que hacen el desarrollo más eficiente y las aplicaciones más rápidas.</p>
      <p>Turbopack ahora es el bundler por defecto en desarrollo, ofreciendo hasta 53% más de rapidez en el inicio del servidor.</p>
      <p>Las Server Actions ahora son más estables y eficientes, permitiendo mejor manejo de formularios y mutaciones de datos.</p>
      <p>El componente Image ahora tiene mejor rendimiento y soporte para formatos modernos.</p>
      <p>Next.js 14 continúa mejorando la experiencia de desarrollo y el rendimiento de las aplicaciones.</p>
    `
    },
    {
        id: 4,
        title: "CSS Grid vs Flexbox",
        excerpt: "Cuándo usar cada uno y las mejores prácticas para layouts modernos.",
        slug: "css-grid-vs-flexbox",
        publishedAt: "2024-02-28",
        readTime: 10,
        author: "DevPortfolio",
        content: `
      <p>CSS Grid y Flexbox son dos herramientas poderosas para crear layouts modernos. Cada uno tiene sus fortalezas y casos de uso ideales.</p>
      <p>Flexbox es ideal para alinear elementos en una dimensión, distribuir espacio entre elementos y crear componentes como navegaciones o tarjetas.</p>
      <p>CSS Grid es perfecto para layouts complejos de dos dimensiones, diseños de página completos y cuando necesitas control preciso sobre filas y columnas.</p>
      <p>Lo mejor es usar ambos juntos: Grid para el layout general y Flexbox para componentes específicos.</p>
      <p>Conocer ambas herramientas te permitirá crear layouts más eficientes y mantenibles.</p>
    `
    },
    {
        id: 5,
        title: "State Management en React",
        excerpt: "Comparando Redux, Zustand y Context API para manejar estado en aplicaciones React.",
        slug: "state-management-react",
        publishedAt: "2024-02-20",
        readTime: 15,
        author: "DevPortfolio",
        content: `
      <p>El manejo de estado es crucial en aplicaciones React. Hay varias opciones, cada una con sus ventajas.</p>
      <p>Context API es built-in en React, ideal para estado global simple y aplicaciones pequeñas a medianas.</p>
      <p>Redux es potente y predecible, ideal para aplicaciones grandes con estado complejo.</p>
      <p>Zustand es minimalista y fácil de usar, excelente para la mayoría de casos de uso.</p>
      <p>Elige la herramienta que mejor se adapte al tamaño y complejidad de tu aplicación.</p>
    `
    },
    {
        id: 6,
        title: "Testing en JavaScript",
        excerpt: "Guía completa para testing unitario e integración con Jest y React Testing Library.",
        slug: "testing-javascript",
        publishedAt: "2024-02-15",
        readTime: 11,
        author: "DevPortfolio",
        content: `
      <p>El testing es esencial para mantener código robusto y mantenible.</p>
      <p>Unit Tests prueban unidades individuales de código.</p>
      <p>Integration Tests prueban cómo interactúan múltiples componentes.</p>
      <p>E2E Tests prueban flujos completos de usuario.</p>
      <p>Jest y React Testing Library son excelentes para testing en React.</p>
      <p>Un buen suite de tests te da confianza para hacer cambios y refactorizaciones.</p>
    `
    },
    {
        id: 7,
        title: "API REST con Node.js",
        excerpt: "Construyendo APIs RESTful robustas con Node.js, Express y mejores prácticas de seguridad.",
        slug: "api-rest-nodejs",
        publishedAt: "2024-02-10",
        readTime: 9,
        author: "DevPortfolio",
        content: `
      <p>Crear APIs RESTful con Node.js es una habilidad fundamental para desarrolladores backend.</p>
      <p>Express es el framework más popular para crear APIs en Node.js.</p>
      <p>Validación de entrada, manejo de errores, autenticación y autorización son prácticas clave.</p>
      <p>Rate limiting es importante para proteger tu API contra abusos.</p>
      <p>Con estas prácticas, puedes crear APIs seguras y escalables.</p>
    `
    }
];
async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = mockBlogPosts.find((p)=>p.slug === slug);
    if (!post) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    // Obtener posts relacionados (excluyendo el post actual)
    const relatedPosts = mockBlogPosts.filter((p)=>p.id !== post.id).slice(0, 6) // Tomar los primeros 6 posts relacionados
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container mx-auto px-4 py-12 space-y-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=400&fit=crop&crop=entropy&auto=format",
                    alt: "Programming code and development",
                    className: "w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.tsx",
                    lineNumber: 156,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/blog/[slug]/page.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-5xl font-bold text-gray-900",
                        children: post.title
                    }, void 0, false, {
                        fileName: "[project]/app/blog/[slug]/page.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-600 text-lg",
                        children: [
                            "Por ",
                            post.author,
                            " • ",
                            post.publishedAt,
                            " • ",
                            post.readTime,
                            " min read"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/blog/[slug]/page.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/blog/[slug]/page.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-4xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "prose prose-lg max-w-none text-gray-700 leading-relaxed",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        dangerouslySetInnerHTML: {
                            __html: post.content
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/blog/[slug]/page.tsx",
                        lineNumber: 176,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.tsx",
                    lineNumber: 175,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/blog/[slug]/page.tsx",
                lineNumber: 174,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-6xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-8",
                    children: relatedPosts.map((relatedPost)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: relatedPost.id === 2 ? "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=400&fit=crop&crop=entropy&auto=format" : relatedPost.id === 3 ? "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=400&fit=crop&crop=entropy&auto=format" : relatedPost.id === 4 ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=entropy&auto=format" : relatedPost.id === 5 ? "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop&crop=entropy&auto=format" : relatedPost.id === 6 ? "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=400&fit=crop&crop=entropy&auto=format" : relatedPost.id === 7 ? "https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit=crop&crop=entropy&auto=format" : "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&crop=entropy&auto=format",
                                    alt: `${relatedPost.title} thumbnail`,
                                    className: "w-full aspect-square object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-gray-900 leading-tight",
                                            children: relatedPost.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/[slug]/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 leading-relaxed",
                                            children: relatedPost.excerpt
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/[slug]/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `/blog/${relatedPost.slug}`,
                                            className: "text-blue-600 hover:text-blue-800 font-semibold",
                                            children: "Leer →"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/[slug]/page.tsx",
                                            lineNumber: 207,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                    lineNumber: 200,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, relatedPost.id, true, {
                            fileName: "[project]/app/blog/[slug]/page.tsx",
                            lineNumber: 184,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.tsx",
                    lineNumber: 182,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/blog/[slug]/page.tsx",
                lineNumber: 181,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/blog/[slug]/page.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/blog/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__03hho43._.js.map