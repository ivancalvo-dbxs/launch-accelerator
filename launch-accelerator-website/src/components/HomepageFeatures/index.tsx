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
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        &#x2611; Organizations that are getting started on Databricks and are ready to start the development their first data+AI use case. <br/> <br/>

        The content is focused on how to execute while following the best practices.
      </>
    ),
  },
  {
    title: 'Expected content',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        &#x2611; Cloud pre-requisites <br/>
        &#x2611; Databricks Workspaces <br/>
        &#x2611; Governance with Unity Catalog <br/>
        &#x2611; Physical and logical data isolation <br/>
        &#x2611; Build your first data pipeline <br/>
        &#x2611; How to serve data to users and applications <br/>
        &#x2611; ML and GenAI toolset <br/>
        &#x2611; Next steps on your Databricks journey. <br/>
      </>
      /*<>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
      */
    ),
  },
  {
    title: 'Expected outcome',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A production ready Databricks foundation and setup for the organization up-coming Databricks use cases.
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
