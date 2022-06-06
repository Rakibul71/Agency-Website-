import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Agency</title>
        <meta name="description" content="This is Rakib agency page " />
      </Head>

      <Intro />



    </div>
  )
}
