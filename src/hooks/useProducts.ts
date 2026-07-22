import { useQuery } from '@tanstack/react-query'

import { graphqlRequest } from '@/lib/graphql-client'
import type { Product } from '@/types/product'

const PRODUCTS_QUERY = /* GraphQL */ `
  query Products {
    products {
      id
      name
      variety
      zone
      quantity
      plantedDate
      harvestReadyDate
      status
    }
  }
`

interface ProductsQueryResult {
  products: Product[]
}

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const data = await graphqlRequest<ProductsQueryResult>(PRODUCTS_QUERY)
      return data.products
    },
  })
}
