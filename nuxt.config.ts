// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    target: "static", //Set the site for static web hosting
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "pinia-plugin-persistedstate/nuxt"],
    tailwindcss: {
        configPath: 'tailwind.config.js',
        cssPath: '~/assets/css/main.css',
        exposeConfig: false,
    },
    runtimeConfig: {
        // The private keys which are only available within server-side
        // Keys within public, will be also exposed to the client-side
        public: {
        },
    },
    app: {
        // For GitHub Pages with custom domain, leave baseURL as '/'
        // For GitHub Pages at username.github.io/repo-name, set baseURL: '/repo-name/'
        baseURL: '/',
        head: {
            title: "Calvin Chan - Full Stack Engineering Leader | 30K+ Users, 99.75% Reliability",
            link: [
                { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
                { rel: "preload", href: "/images/hero_image.jpg", as: "image" }
            ],
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { name: "description", content: "Full Stack Engineering Leader with experience building web applications serving 30,000+ concurrent users at 99.75% reliability. Expert in Nuxt, Vue, Spring Boot, AWS. Managed teams of 6-10 developers delivering enterprise and startup solutions." },
                { name: "author", content: "Calvin Chan" },
                { name: "keywords", content: "Full Stack Engineer, Engineering Leader, Nuxt, Vue.js, Spring Boot, AWS, Team Management, Web Development, JavaScript, Java" },

                // Open Graph / Facebook
                { property: "og:type", content: "website" },
                { property: "og:url", content: "https://calvinchan.dev" },
                { property: "og:title", content: "Calvin Chan - Full Stack Engineering Leader" },
                { property: "og:description", content: "Building web applications serving 30,000+ concurrent users with 99.75% reliability. Leading teams and delivering enterprise solutions." },
                { property: "og:image", content: "https://calvinchan.dev/images/og-image.jpg" },

                // Twitter
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:title", content: "Calvin Chan - Full Stack Engineering Leader" },
                { name: "twitter:description", content: "Building web applications serving 30,000+ concurrent users with 99.75% reliability" },
                { name: "twitter:image", content: "https://calvinchan.dev/images/og-image.jpg" },
            ],
            script: [
                {
                    type: "application/ld+json",
                    children: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Calvin Chan",
                        "jobTitle": "Full Stack Engineering Leader",
                        "url": "https://calvinchan.dev",
                        "sameAs": [
                            "https://github.com/Cyrois",
                            "https://linkedin.com/in/chancalvink",
                            "https://stackoverflow.com/users/3862346/cyrois"
                        ],
                        "email": "calvinkylechan@gmail.com",
                        "description": "Full Stack Engineering Leader building web applications serving 30,000+ concurrent users with 99.75% reliability. Expert in Nuxt, Vue, Spring Boot, and AWS.",
                        "skills": ["Nuxt", "Vue.js", "React Native", "Angular", "JavaScript", "Spring Boot", "Laravel", "Node.js", "Java", "AWS", "Team Management"]
                    })
                }
            ],
        },
    },
})
