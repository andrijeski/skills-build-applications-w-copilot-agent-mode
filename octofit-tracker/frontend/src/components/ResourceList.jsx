import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

function renderValue(value) {
  if (value === null || value === undefined || value === '') {
    return 'Not set'
  }

  if (Array.isArray(value)) {
    return value.length ? `${value.length} linked` : 'None'
  }

  if (typeof value === 'object') {
    return value.name || value.title || value.email || value._id || 'Linked record'
  }

  return value
}

function ResourceList({ endpoint, resource, title, description, fields }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    async function loadItems() {
      try {
        const nextItems = await fetchCollection(endpoint || resource)

        if (!ignore) {
          setItems(nextItems)
          setError('')
        }
      } catch (nextError) {
        if (!ignore) {
          setError(nextError.message)
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    loadItems()

    return () => {
      ignore = true
    }
  }, [endpoint, resource])

  return (
    <section className="resource-panel">
      <div className="resource-heading">
        <div>
          <p className="eyebrow">OctoFit data</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <span className="badge text-bg-dark">{items.length} records</span>
      </div>

      {loading && <div className="alert alert-secondary">Loading {title.toLowerCase()}...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && !error && (
        <div className="row g-3">
          {items.map((item) => (
            <div className="col-12 col-lg-6" key={item._id || item.id || JSON.stringify(item)}>
              <article className="resource-card">
                <h2>{item.name || item.title || item.type || `Record ${item.rank || ''}`}</h2>
                <dl>
                  {fields.map((field) => (
                    <div key={field.key}>
                      <dt>{field.label}</dt>
                      <dd>{renderValue(item[field.key])}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default ResourceList