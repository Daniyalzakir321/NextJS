import Header from './head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div>
            <Header />
            {/* <h1 className={styles.container}>ABOUT</h1> */}
            <h1 >ABOUT</h1>

            <Link href="about">
        <a style={{color: 'green',}}>
        <h1>About</h1>
        </a>
      </Link>
      <Link href="/contact">
        <h1>Contact</h1>
      </Link>
      <Link href="/products/product?name=damo1&fname=demo2">
        <h1>Product</h1>
      </Link>
        </div>
    )
}
