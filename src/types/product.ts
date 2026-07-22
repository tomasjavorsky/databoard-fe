export interface Product {
  id: string
  name: string
  variety: string
  zone: string
  quantity: number
  plantedDate: string
  harvestReadyDate: string
  status: 'growing' | 'ready' | 'harvested' | 'needs attention'
}
