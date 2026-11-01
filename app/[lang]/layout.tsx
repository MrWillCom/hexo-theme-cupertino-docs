import { translations, baseOptions } from '@/lib/layout.shared'
import { source } from '@/lib/source'
import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import { i18nProvider } from 'fumadocs-ui/i18n'
import { RootProvider } from 'fumadocs-ui/provider/next'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '../global.css'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Hexo Theme Cupertino',
    template: '%s | Hexo Theme Cupertino',
  },
  description:
    'Documentation for Hexo Theme Cupertino, a modern and elegant theme for Hexo.',
}

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>
  children: ReactNode
}) {
  const { lang } = await params

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider i18n={i18nProvider(translations, lang)}>
          <DocsLayout
            {...baseOptions(lang)}
            tree={source.getPageTree(lang)}
            sidebar={{
              footer: (
                <p className="text-xs text-fd-muted-foreground">
                  © 2022 - {new Date().getFullYear()} Hexo Theme Cupertino.
                </p>
              ),
            }}
          >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  )
}
