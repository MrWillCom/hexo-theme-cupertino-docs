export default {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Hexo Theme Cupertino',
    }
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
}
