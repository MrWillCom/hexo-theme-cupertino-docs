import { defineConfig } from 'fumadocs-mdx/config'

export default defineConfig({
  mdxOptions: {
    remarkNpmOptions: {
      persist: {
        id: 'package-manager',
      },
    },
    rehypeCodeOptions: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
      langs: ['html', 'jinja', 'json', 'markdown', 'md', 'shellscript', 'yaml', 'yml'],
      langAlias: {
        nunjucks: 'jinja',
        sh: 'shellscript',
      },
    },
  },
})
