import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Simple',
    Svg: require('@site/static/img/simple.svg').default,
    description: (
      <>
        Theme Cupertino enables you to start your site with almost zero configuration.
      </>
    ),
  },
  {
    title: 'Beautiful',
    Svg: require('@site/static/img/beautiful.svg').default,
    description: (
      <>
        Theme Cupertino has a gorgeous design, contains fluent animations and
        clean experience.
      </>
    ),
  },
  {
    title: 'Powered by Hexo',
    Svg: require('@site/static/img/powered_by_hexo.svg').default,
    description: (
      <>
        <Link href='https://hexo.io/'>Hexo</Link> is a fast, simple and
        powerful blog framework, works perfectly with your blog.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
