function splitSuffix(href: string) {
  const match = href.match(/^[^?#]*/)
  const path = match?.[0] ?? href
  return { path, suffix: href.slice(path.length) }
}

export function localizeHref(href: string, locale: string) {
  if (!href.startsWith('/') || href.startsWith('//')) return href

  const { path, suffix } = splitSuffix(href)
  if (path === `/${locale}` || path.startsWith(`/${locale}/`)) return href
  if (path.startsWith('/videos/') || path.startsWith('/_next/')) return href
  if (/\.[a-z0-9]+$/i.test(path)) return href

  const localized = path === '/' ? `/${locale}` : `/${locale}${path}`
  return `${localized}${suffix}`
}
