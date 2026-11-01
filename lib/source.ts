import { loader, llms } from 'fumadocs-core/source'
import { defineDocs } from 'fumadocs-mdx/macro'
import { docsRoute } from './shared'
import { i18n } from '@/lib/i18n'

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
})

export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  i18n,
})

export const docsLlms = llms(source, {
  renderPage: async page => `# ${page.data.title} (${page.url})

${await page.data.getText('processed')}`,
})
