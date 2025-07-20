import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Target audience',
    Svg: require('@site/static/img/icons/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        &#x2611; Organizations that are getting started on Databricks <br/> <br/>
        
        &#x2611; Data teams ready to start their first Data + AI use case. <br/> <br/>
      </>
    ),
  },
  {
    title: 'Content',
    Svg: require('@site/static/img/icons/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        &#x2611; Databricks Main Concepts <br/>
        &#x2611; Pre-requisites <br/>
        &#x2611; Pre-requisites <br/>
      </>
      /*<>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
      */
    ),
  },
  {
    title: 'Outcome',
    Svg: require('@site/static/img/icons/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A production-ready Databricks foundation, setup and use case MVP.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
