const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_URL

export class GraphQLError extends Error {
  errors: unknown[]

  constructor(message: string, errors: unknown[]) {
    super(message)
    this.name = 'GraphQLError'
    this.errors = errors
  }
}

export async function graphqlRequest<TData>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<TData> {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  })

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.status} ${response.statusText}`)
  }

  const result = await response.json() as { data?: TData; errors?: unknown[] }

  if (result.errors?.length) {
    throw new GraphQLError(result.errors.map((e) => (e as { message?: string }).message).join(', '), result.errors)
  }

  return result.data as TData
}
