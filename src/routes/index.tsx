import { MessageCircle } from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router'
import type { ColumnDef } from '@tanstack/react-table'

import { ChatPanel } from '@/components/ChatPanel'
import { DataTable } from '@/components/DataTable'
import { PageHeader } from '@/components/PageHeader'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import type { Product } from '@/types/product'
import { useProducts } from '@/hooks/useProducts'
import { cn, daysUntil, formatDate, slugify } from '@/lib/utils'

const statusVariant: Record<Product['status'], 'growing' | 'ready' | 'harvested' | 'needs-attention'> = {
  growing: 'growing',
  ready: 'ready',
  harvested: 'harvested',
  'needs attention': 'needs-attention',
}

const statusShadow: Record<Product['status'], string> = {
  growing: 'shadow-[2px_2px_0_0_color-mix(in_srgb,var(--badge-growing)_50%,transparent)]',
  ready: 'shadow-[2px_2px_0_0_color-mix(in_srgb,var(--badge-ready)_50%,transparent)]',
  harvested: 'shadow-[2px_2px_0_0_color-mix(in_srgb,var(--badge-harvested)_50%,transparent)]',
  'needs attention': 'shadow-[2px_2px_0_0_color-mix(in_srgb,var(--badge-needs-attention)_50%,transparent)]',
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
              className={cn(
                'rounded-sm object-cover border-1 border-background',
                statusShadow[row.original.status],
              )}
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
    cell: ({ row }) => {
      const remainingDays = daysUntil(row.original.harvestReadyDate)
      return (
        <span>
          {formatDate(row.original.harvestReadyDate)}{' '}
          <span className="text-muted-foreground">
            {remainingDays > 0
              ? `(in ${remainingDays}d)`
              : remainingDays === 0
                ? '(today)'
                : `(${Math.abs(remainingDays)}d ago)`}
          </span>
        </span>
      )
    },
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
      <PageHeader title="Warehouse Overview" />
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Index,
})
