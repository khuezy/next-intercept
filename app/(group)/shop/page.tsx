import Link from 'next/link'

export default function Page() {
  return <div>
    Main Shop
    <div><Link href="/shop/123">Go to nested</Link></div>

    <div><Link href="/cart">Go to cart</Link></div>

  </div>
}