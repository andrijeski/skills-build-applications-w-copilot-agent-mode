import ResourceList from './ResourceList'

function Leaderboard() {
  return (
    <ResourceList
      endpoint="/api/leaderboard/"
      resource="leaderboard"
      title="Leaderboard"
      description="Competitive standings ranked by total OctoFit points."
      fields={[
        { key: 'rank', label: 'Rank' },
        { key: 'points', label: 'Points' },
        { key: 'user', label: 'Member' }
      ]}
    />
  )
}

export default Leaderboard