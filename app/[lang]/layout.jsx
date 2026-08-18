import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'

export const metadata = {}

const banner = <></>
const navbar = (
  <Navbar
    logo={
      <span>
        Hexo Theme <b>Cupertino</b>
      </span>
    }
  />
)
const footer = (
  <Footer>
    <small>© 2022 - {new Date().getFullYear()} Hexo Theme Cupertino.</small>
  </Footer>
)

export default async function RootLayout({ children, params }) {
  const { lang } = await params
  return (
    <html lang={lang} dir="ltr" suppressHydrationWarning>
      <Head color={{ hue: 190 }} />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap(`/${lang}`)}
          docsRepositoryBase="https://github.com/MrWillCom/hexo-theme-cupertino-docs/tree/main"
          footer={footer}
          i18n={[
            { locale: 'en', name: 'English' },
            { locale: 'zh', name: '中文' },
          ]}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
