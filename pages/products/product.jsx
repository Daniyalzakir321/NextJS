import Header from '../head'
import Link from 'next/link'
import React from 'react'

export default function Product() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log(params )

    return (
        <div>
            <Header />
            <h1 >PRODUCT </h1>
            <h2 >1: {params.name}</h2>
            <h2 >2: {params.fname}</h2>

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
