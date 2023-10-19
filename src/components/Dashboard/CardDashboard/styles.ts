import tw from 'tailwind-styled-components'

export const SContainer = tw.div`
flex
flex-1
flex-col
rounded-xl
bg-white
shadow-md
p-4
`

export const SContainerInner = tw.div`
flex
items-center
justify-between
`

export const SContainerIcon = tw.div`
h-14
w-14
flex
justify-center
items-center
rounded-xl
text-white
-mt-12
shadow-lg
data-[type=cake]:bg-gradient-to-tr
data-[type=cake]:to-pink-500
data-[type=cake]:from-pink-400
data-[type=doces]:bg-gradient-to-tr
data-[type=doces]:to-blue-500
data-[type=doces]:from-blue-400
data-[type=sanduiches]:bg-gradient-to-tr
data-[type=sanduiches]:to-green-500
data-[type=sanduiches]:from-green-400
data-[type=entregas]:bg-gradient-to-tr
data-[type=entregas]:to-gray-900
data-[type=entregas]:from-gray-800
`
export const SContainerNameQuantity = tw.div`
flex
flex-col
items-end
`
export const SName = tw.div`
font-light
text-sm
`

export const SQuantity = tw.div`
text-xl
font-semibold
`
