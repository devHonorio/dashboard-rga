import { ConfigClientes } from '@/config-components/config-clientes'
import {
  SContainer,
  SContainerTable,
  STable,
  STbody,
  STd,
  STh,
  SThead,
  STitle,
  STr
} from './styles'

export default function Table() {
  return (
    <SContainer>
      <SContainerTable>
        <STitle>Clientes</STitle>
        <STable>
          <SThead>
            <STr>
              <STh>id</STh>
              <STh>Nome</STh>
              <STh>Telefone</STh>
            </STr>
          </SThead>
          <STbody>
            {ConfigClientes.map((e) => (
              <STr key={e.id}>
                <STd>{e.id}</STd> <STd>{e.name}</STd>
                <STd>{e.phone}</STd>
              </STr>
            ))}
          </STbody>
        </STable>
      </SContainerTable>
    </SContainer>
  )
}
