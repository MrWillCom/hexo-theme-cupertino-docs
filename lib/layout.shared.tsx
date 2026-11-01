import { zhCN } from '@fumadocs/language/zh-cn'
import { i18n } from '@/lib/i18n'
import { uiTranslations } from 'fumadocs-ui/i18n'
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .preset('zh', zhCN())
  .add({
    en: {
      displayName: 'English',
    },
    zh: {
      displayName: '中文',
    },
  })

export function baseOptions(
  locale: string = i18n.defaultLanguage,
): BaseLayoutProps {
  return {
    nav: {
      title: 'Hexo Theme Cupertino',
      url: locale === i18n.defaultLanguage ? '/' : `/${locale}`,
    },
    githubUrl: 'https://github.com/MrWillCom/hexo-theme-cupertino',
  }
}
