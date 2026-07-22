import { createFileRoute } from '@tanstack/react-router'
import type { ColumnDef } from '@tanstack/react-table'

import { DataTable } from '@/components/DataTable'
import { Badge } from '@/components/ui/badge'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import type { Product } from '@/types/product'
import { useProducts } from '@/hooks/useProducts'
import { formatDate, slugify } from '@/lib/utils'

const statusVariant: Record<Product['status'], 'growing' | 'ready' | 'harvested' | 'needs-attention'> = {
  growing: 'growing',
  ready: 'ready',
  harvested: 'harvested',
  'needs attention': 'needs-attention',
}

const columns: ColumnDef<Product>[] = [
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
  {
    accessorKey: 'plantedDate',
    header: 'Planted',
    cell: ({ row }) => formatDate(row.original.plantedDate),
  },
  {
    accessorKey: 'harvestReadyDate',
    header: 'Harvest Ready',
    cell: ({ row }) => formatDate(row.original.harvestReadyDate),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <Badge variant={statusVariant[row.original.status]}>
        {row.original.status}
      </Badge>
    ),
  },
]

const Index = () => {
  const { data, isPending, isError, error } = useProducts()

  if (isPending) {
    return <p className="text-sm text-muted-foreground">Loading vegetables…</p>
  }

  if (isError) {
    return <p className="text-sm text-destructive">Failed to load vegetables: {error.message}</p>
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Warehouse Overview</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Index,
})
