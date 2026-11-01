import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
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
  const zh = lang === 'zh'
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
          {...(zh
            ? {
                editLink: '编辑本页',
                themeSwitch: {
                  dark: '深色',
                  light: '浅色',
                  system: '跟随系统',
                },
                feedback: { content: '有问题？给我们反馈' },
                toc: { title: '本页目录', backToTop: '回到顶部' },
                search: (
                  <Search
                    placeholder="搜索文档…"
                    emptyResult="没有找到结果。"
                    errorText="搜索索引加载失败。"
                    loading="正在加载…"
                  />
                ),
              }
            : {})}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
