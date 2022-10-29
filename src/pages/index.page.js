import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Pokemons from './pokemons/index.page';
import GenerateHeadPageSEO from '../helpers/seoPerPage';
import styles from '../styles/Home.module.css';
import pokeball from '../../public/assets/pokemon-logo.svg';

export default function Home() {
  const sdf = '2';

  return (
    <main className={styles.main}>
      <GenerateHeadPageSEO title="fdf" descriptionPage="dfd" />
      <Image src={pokeball} alt="Logo" width="300" height="100" />

      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <h1 className="text-3xl font-bold underline  hover:text-bgSecondary ">
        Hello world!
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>
  );
}
