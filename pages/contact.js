
import Header from './head'
import Link from 'next/link'

export default function Contact() {
    return (
        <div>
            <Header />
            <h1>CONTACT</h1>

            <Link href="/about">
                <a style={{ color: 'green', }}>
                    <h1>About</h1>
                </a>
            </Link>
            <Link href="/contact">
                <h1>Contact</h1>
            </Link>
            <Link href="/products/product?name=damo1qqqq&fname=demqqq">
                <h1>Product</h1>
            </Link>

            <style jsx>{`
      h1{
          color:'yellow'
        }

        a{
            color:'red'
          }

      `}</style>

        </div>
    )
}
