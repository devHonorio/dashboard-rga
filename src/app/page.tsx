import Dashboard from '@/components/Dashboard'
import Table from '@/components/Table'

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <Dashboard />

      <Table />
      <Table />
      <Table />
    </main>
  )
}
