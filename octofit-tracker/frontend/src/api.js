const apiBaseUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev`
  : 'http://localhost:8000'

export function getApiUrl(resource) {
  if (resource.startsWith('/api/')) {
    return `${apiBaseUrl}${resource}`
  }

  return `${apiBaseUrl}/api/${resource}/`
}

export function normalizeCollection(responseBody) {
  if (Array.isArray(responseBody)) {
    return responseBody
  }

  if (Array.isArray(responseBody?.results)) {
    return responseBody.results
  }

  if (Array.isArray(responseBody?.items)) {
    return responseBody.items
  }

  if (Array.isArray(responseBody?.docs)) {
    return responseBody.docs
  }

  if (Array.isArray(responseBody?.data)) {
    return responseBody.data
  }

  return []
}

export async function fetchCollection(resource) {
  const response = await fetch(getApiUrl(resource))

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return normalizeCollection(await response.json())
}

export { apiBaseUrl }