import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

export default {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Hexo Theme Cupertino',
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { title } = useConfig()

    return (
      <>
        <meta property="og:title" content={`${title} – Hexo Theme Cupertino`} />
        <meta
          property="og:description"
          content="The Docs of Hexo Theme Cupertino."
        />
        <meta
          property="og:image"
          content="https://blog.mrwillcom.com/img/000001.png"
        />
        <meta
          property="og:url"
          content={`https://cupertino.mrwillcom.com${asPath}`}
        />
      </>
    )
  },
  logo: (
    <span>
      Hexo Theme <strong>Cupertino</strong>
    </span>
  ),
  docsRepositoryBase:
    'https://github.com/MrWillCom/hexo-theme-cupertino-docs/tree/main',
  project: {
    link: 'https://github.com/MrWillCom/hexo-theme-cupertino',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <small>
        ©{' '}
        {new Date().getFullYear() === 2022
          ? '2022'
          : '2022 - ' + new Date().getFullYear()}{' '}
        Hexo Theme Cupertino.
      </small>
    ),
  },
  toc: {
    backToTop: true,
  },
}
