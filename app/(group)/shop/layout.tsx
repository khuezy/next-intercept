import { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren & {
  products: ReactNode
  modal: ReactNode
}
export default function Layout({ children, products, modal }: Props) {
  return <div>
    {products}
    {modal}
    {children}
  </div>
}