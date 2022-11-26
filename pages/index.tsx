import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dmitry Rodnikov - Senior Frontend Engineer</title>
        <meta
          name="description"
          content="Personal website of Dmitry Rodnikov, software engineer focusing on frontend"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.header}>Hi, I&apos;m Dima</h1>
      <div className={styles.description}>
        Senior Frontend Engineer, focusing on performance and user experience.
      </div>
      <div className={styles.links}>
        <a href="https://twitter.com/dima_rodnikov">twitter</a>
      </div>
    </div>
  );
}
