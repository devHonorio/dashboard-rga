import {
  ArchiveBox,
  ClipboardDocument,
  RectangleGroup,
  Truck
} from '@/components/icons'

export type Nav = {
  children: React.ReactNode
  href: string
}

export const navConfig: Array<Nav> = [
  {
    children: (
      <>
        <RectangleGroup /> Dashboard
      </>
    ),
    href: '/'
  },
  {
    children: (
      <>
        <ClipboardDocument /> Pedidos
      </>
    ),
    href: '/pedidos'
  },
  {
    children: (
      <>
        <Truck /> Entregas
      </>
    ),
    href: '/entregas'
  },
  {
    children: (
      <>
        <ArchiveBox /> Produção
      </>
    ),
    href: '/producao'
  }
]
