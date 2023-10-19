import { configDashboard } from '@/config-components/config-dashboard'
import CardDashboard from './CardDashboard'
import { SContainer } from './styles'

export default function Dashboard() {
  return (
    <SContainer>
      {configDashboard.map((e) => (
        <CardDashboard
          key={e.name}
          icon={e.icon}
          name={e.name}
          quantity={e.quantity}
          type={e.type}
        />
      ))}
    </SContainer>
  )
}
