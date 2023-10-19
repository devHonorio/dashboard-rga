import Image from 'next/image'
import Link from 'next/link'
import tw from 'tailwind-styled-components'

export const SContainer = tw.div`
flex
h-screen
w-screen
bg-gray-100
`
export const SContainerInner = tw.main`
relative
flex
flex-col
h-full
w-full
overflow-hidden
overflow-y-scroll
p-5
`

export const SAside = tw.aside`
flex
flex-col
gap-8
w-64
m-6
rounded-lg
bg-gradient-to-tr
to-gray-900
from-gray-950
`

export const SLogo = tw(Image)`
h-24
w-24
self-center
mt-5
`
export const SNav = tw.nav`
flex
flex-col
gap-3
p-4

`
export const SLink = tw(Link)`
flex
items-center
gap-4
rounded-md
text-sm
text-gray-100
px-4
py-4
data-[active=true]:bg-gradient-to-r
data-[active=true]:to-orange-500
data-[active=true]:from-orange-400
hover:bg-gray-800
active:bg-gray-900
`

export const SHeader = tw.header`
sticky
top-0
w-full
flex
items-center
justify-between
rounded-md
backdrop-blur-md
shadow-md
px-5
py-4
`
