'use client'

import {
  SAside,
  SContainer,
  SContainerInner,
  SHeader,
  SLink,
  SLogo,
  SNav
} from '@/components/Layout/styles'
import './globals.css'
import { navConfig } from '@/config-components/nav-config'
import { usePathname } from 'next/navigation'
import { UserCircle } from '@/components/icons'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname()
  return (
    <html lang="pt-br">
      <body>
        <SContainer>
          <SAside>
            <SLogo width={100} height={100} alt="Logo RGA" src={'/logo.png'} />

            <SNav>
              {navConfig.map((e) => (
                <SLink
                  key={e.href}
                  href={e.href}
                  data-active={pathName == e.href}
                >
                  {e.children}
                </SLink>
              ))}
            </SNav>
          </SAside>

          <SContainerInner>
            <SHeader>
              <div>{pathName}</div>
              <UserCircle />
            </SHeader>
            {children}
          </SContainerInner>
        </SContainer>
      </body>
    </html>
  )
}
