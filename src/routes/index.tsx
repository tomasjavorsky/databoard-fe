import { createFileRoute } from '@tanstack/react-router'
import type { ColumnDef } from '@tanstack/react-table'

import { DataTable } from '@/components/DataTable'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { dummyVegetables, type Vegetable } from '@/data/dummyData'
import { slugify } from '@/lib/utils'

const columns: ColumnDef<Vegetable>[] = [
  {
    id: 'icon',
    header: '',
    cell: ({ row }) => {
      const slug = `${slugify(row.original.name)}--${slugify(row.original.variety)}`
      return (
        <HoverCard openDelay={100} closeDelay={0}>
          <HoverCardTrigger asChild>
            <img
              src={`/vegetable-icons/${slug}.png`}
              alt={row.original.variety}
              width={20}
              height={20}
              className="rounded-sm object-cover"
            />
          </HoverCardTrigger>
          <HoverCardContent side="right">
            <img
              src={`/vegetable-icons/originals/${slug}.jpg`}
              alt={row.original.variety}
              className="h-40 w-40 rounded-md object-cover"
            />
          </HoverCardContent>
        </HoverCard>
      )
    },
  },
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
