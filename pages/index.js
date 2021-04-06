import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninja" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam est non sit quas. Eos reprehenderit culpa aperiam nostrum quidem, earum corrupti, veniam sit velit nam quas repudiandae vitae aliquid est.</p>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam est non sit quas. Eos reprehenderit culpa aperiam nostrum quidem, earum corrupti, veniam sit velit nam quas repudiandae vitae aliquid est.</p>
        <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
      </div>
    </>
  )
}
