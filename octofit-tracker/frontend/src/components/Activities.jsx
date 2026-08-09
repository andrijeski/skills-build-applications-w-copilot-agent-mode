import ResourceList from './ResourceList'

function Activities() {
  return (
    <ResourceList
      endpoint="/api/activities/"
      codespacesEndpoint="-8000.app.github.dev/api/activities"
      resource="activities"
      title="Activities"
      description="Recent fitness activity logged by OctoFit members."
      fields={[
        { key: 'type', label: 'Activity' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'user', label: 'Member' },
        { key: 'recordedAt', label: 'Recorded' }
      ]}
    />
  )
}

export default Activities