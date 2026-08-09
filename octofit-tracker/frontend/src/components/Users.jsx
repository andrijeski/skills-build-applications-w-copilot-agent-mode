import ResourceList from './ResourceList'

function Users() {
  return (
    <ResourceList
      endpoint="/api/users/"
      resource="users"
      title="Users"
      description="Member profiles and coaching roles in the OctoFit tracker."
      fields={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Role' }
      ]}
    />
  )
}

export default Users