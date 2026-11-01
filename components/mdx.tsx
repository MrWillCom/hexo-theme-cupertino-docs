import { localizeHref } from '@/lib/links'
import { source } from '@/lib/source'
import { Card, Cards } from 'fumadocs-ui/components/card'
import { File, Files, Folder } from 'fumadocs-ui/components/files'
import { Step, Steps } from 'fumadocs-ui/components/steps'
import * as TabsComponents from 'fumadocs-ui/components/tabs'
import defaultMdxComponents, { createRelativeLink } from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'
import type { ComponentProps } from 'react'

type CardProps = ComponentProps<typeof Card>
type AnchorProps = ComponentProps<'a'>

const Tabs = Object.assign(TabsComponents.Tabs, {
  Tab: TabsComponents.Tab,
})

function localizedCard(locale?: string) {
  return function LocalizedCard({ href, ...props }: CardProps) {
    const nextHref =
      locale && typeof href === 'string' ? localizeHref(href, locale) : href
    return <Card href={nextHref} {...props} />
  }
}

export function getMDXComponents(
  components?: MDXComponents,
  locale?: string,
): MDXComponents {
  const LocalizedCard = localizedCard(locale)
  const LocalizedCards = Object.assign(
    (props: ComponentProps<typeof Cards>) => <Cards {...props} />,
    { Card: LocalizedCard },
  )

  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    Tabs,
    Tab: TabsComponents.Tab,
    Steps,
    Step,
    Files,
    Folder,
    File,
    Card: LocalizedCard,
    Cards: LocalizedCards,
    ...components,
  }
}

export function getPageMDXComponents(
  locale: string,
  page: Parameters<typeof createRelativeLink>[1],
) {
  const RelativeLink = createRelativeLink(source, page)

  function a({ href, ...props }: AnchorProps) {
    if (
      typeof href === 'string' &&
      (href.startsWith('./') || href.startsWith('../'))
    ) {
      return <RelativeLink href={href} {...props} />
    }

    const nextHref =
      typeof href === 'string' ? localizeHref(href, locale) : href
    const Link = defaultMdxComponents.a
    return <Link href={nextHref} {...props} />
  }

  return getMDXComponents({ a }, locale)
}

export const useMDXComponents = getMDXComponents

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>
}
