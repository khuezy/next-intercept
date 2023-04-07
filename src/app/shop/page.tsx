import Link from 'next/link'

export default function Page() {
  return <div>
    Main Shop
    <div><Link href="/shop/tombadillistlolloolol/123_sfdsf">Go to nested</Link></div>

    <div><Link href="/cart">Go to cart</Link></div>

  </div>
}