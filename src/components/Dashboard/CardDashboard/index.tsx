import {
  SContainer,
  SContainerIcon,
  SContainerInner,
  SContainerNameQuantity,
  SName,
  SQuantity
} from './styles'
import { ConfigDashboardType } from '@/config-components/config-dashboard'

export default function CardDashboard({
  icon,
  name,
  quantity,
  type
}: ConfigDashboardType) {
  return (
    <SContainer>
      <SContainerInner>
        <SContainerIcon data-type={type}>{icon}</SContainerIcon>
        <SContainerNameQuantity>
          <SName>{name}</SName>
          <SQuantity>{quantity}</SQuantity>
        </SContainerNameQuantity>
      </SContainerInner>
    </SContainer>
  )
}
