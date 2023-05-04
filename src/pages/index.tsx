import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>American English for Devs</title>
        <meta name="description" content="Cruelty-Free Martial Arts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description} >
          <h1>Welcome to American English for Devs</h1>
        </div>
      </main>
    </>
  )
}
