import ResourceList from './ResourceList'

function Teams() {
  return (
    <ResourceList
      endpoint="/api/teams/"
      resource="teams"
      title="Teams"
      description="Training groups for shared goals and team accountability."
      fields={[
        { key: 'name', label: 'Team' },
        { key: 'members', label: 'Members' }
      ]}
    />
  )
}

export default Teams