import { Cake, Heart, QueueList, Truck } from '@/components/icons'

export type ConfigDashboardType = {
  icon: React.ReactNode
  name: string
  quantity: number
  type: string
}

export const configDashboard: Array<ConfigDashboardType> = [
  { icon: <Cake />, name: 'Bolos', quantity: 30, type: 'cake' },
  { icon: <Heart />, name: 'Doces', quantity: 350, type: 'doces' },
  { icon: <QueueList />, name: 'Sanduíches', quantity: 30, type: 'sanduiches' },
  { icon: <Truck />, name: 'Entregas', quantity: 70, type: 'entregas' }
]
