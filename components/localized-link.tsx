'use client'

import { updateHref } from 'fumadocs-core/dynamic-link'
import Link from 'fumadocs-core/link'
import { i18n } from '@/lib/i18n'
import { useParams } from 'next/navigation'
import type { ComponentProps } from 'react'

function routeParams(params: ReturnType<typeof useParams>) {
  const resolved: Record<string, string | string[]> = {}

  for (const [key, value] of Object.entries(params)) {
    if (value) resolved[key] = value
  }

  return resolved
}

export function localizeHref(href: string, params: Record<string, string | string[]>) {
  let next = updateHref(decodeURIComponent(href), params)

  if (i18n.hideLocale === 'default-locale') {
    const prefix = `/${i18n.defaultLanguage}`
    if (next === prefix) return '/'
    if (next.startsWith(`${prefix}/`)) return next.slice(prefix.length)
  }

  return next
}

export function useLocalizedHref(href?: string) {
  const params = routeParams(useParams())
  if (typeof href !== 'string') return href
  return localizeHref(href, params)
}

export function LocalizedLink({ href, ...props }: ComponentProps<typeof Link>) {
  const localized = useLocalizedHref(typeof href === 'string' ? href : undefined)

  return <Link href={localized ?? href} {...props} />
}
