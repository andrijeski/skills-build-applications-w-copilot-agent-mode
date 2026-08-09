import ResourceList from './ResourceList'

function Workouts() {
  return (
    <ResourceList
      endpoint="/api/workouts/"
      codespacesEndpoint="-8000.app.github.dev/api/workouts"
      resource="workouts"
      title="Workouts"
      description="Suggested training sessions tailored by duration and difficulty."
      fields={[
        { key: 'title', label: 'Workout' },
        { key: 'difficulty', label: 'Difficulty' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'description', label: 'Focus' }
      ]}
    />
  )
}

export default Workouts