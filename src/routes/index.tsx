import { createFileRoute } from '@tanstack/react-router'
import type { ColumnDef } from '@tanstack/react-table'

import { DataTable } from '@/components/DataTable'
import { dummyVegetables, type Vegetable } from '@/data/dummyData'

const columns: ColumnDef<Vegetable>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'variety', header: 'Variety' },
  { accessorKey: 'zone', header: 'Zone' },
  { accessorKey: 'quantity', header: 'Quantity' },
  { accessorKey: 'plantedDate', header: 'Planted' },
  { accessorKey: 'harvestReadyDate', header: 'Harvest Ready' },
  { accessorKey: 'status', header: 'Status' },
]

const Index = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Warehouse Overview</h1>
      <DataTable columns={columns} data={dummyVegetables} />
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Index,
})
