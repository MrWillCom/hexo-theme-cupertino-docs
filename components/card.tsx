'use client'

import { useLocalizedHref } from '@/components/localized-link'
import { Card as FumadocsCard, type CardProps } from 'fumadocs-ui/components/card'

export function Card({ href, ...props }: CardProps) {
  const localized = useLocalizedHref(href)

  return <FumadocsCard href={localized} {...props} />
}
