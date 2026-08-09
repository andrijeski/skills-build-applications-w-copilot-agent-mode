function getApiBaseUrl() {
  if (import.meta.env.VITE_CODESPACE_NAME) {
    return `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev`
  }

  const hostname = window.location.hostname

  if (hostname.endsWith('-5173.app.github.dev')) {
    return `https://${hostname.replace('-5173.app.github.dev', '-8000.app.github.dev')}`
  }

  return 'http://localhost:8000'
}

const apiBaseUrl = getApiBaseUrl()

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