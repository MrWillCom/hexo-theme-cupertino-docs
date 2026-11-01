import { translations, baseOptions } from '@/lib/layout.shared'
import { source } from '@/lib/source'
import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import { i18nProvider } from 'fumadocs-ui/i18n'
import { RootProvider } from 'fumadocs-ui/provider/next'
import type { ReactNode } from 'react'
import '../global.css'

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>
  children: ReactNode
}) {
  const { lang } = await params

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider i18n={i18nProvider(translations, lang)}>
          <DocsLayout tree={source.getPageTree(lang)} {...baseOptions(lang)}>
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  )
}
