import { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren & {
  products: ReactNode
}
export default function Layout({ children, products }: Props) {
  return <div>
    {products}
    {children}
  </div>
}