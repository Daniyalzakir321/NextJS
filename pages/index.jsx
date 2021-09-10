import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './about'
import Contact from './contact'
import Header from './head'
import Product from './products/product'
import ProductNotFound from './products/index'
import Link from 'next/link'
import TextField from '@material-ui/core/TextField';
import Head from '../components/header'
export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Head/>
      <Link href="/about">
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

      <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" /><br/><br/>
      <TextField id="filled-basic" label="Filled" variant="filled" /><br/><br/>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" /><br/>
    </form>

      {/* <Product /> */}
      {/* <About />
      <Contact /> */}

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <Image src="/images/next.jpeg" alt="Logo" width='400' height='200' />
        </span>
      </footer>

    </div>
  )
}
