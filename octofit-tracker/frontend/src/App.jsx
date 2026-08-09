import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import logo from '../../../docs/octofitapp-small.png'
import './App.css'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'
import { apiBaseUrl } from './api'

function App() {
  const navItems = [
    { to: '/users', label: 'Users' },
    { to: '/teams', label: 'Teams' },
    { to: '/activities', label: 'Activities' },
    { to: '/leaderboard', label: 'Leaderboard' },
    { to: '/workouts', label: 'Workouts' }
  ]

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand-block">
          <img src={logo} alt="OctoFit Tracker" />
          <div>
            <p className="eyebrow">Multi-tier fitness tracker</p>
            <h1>OctoFit Tracker</h1>
          </div>
        </div>
        <div className="api-pill">API: {apiBaseUrl}</div>
      </header>

      <nav className="nav nav-pills app-nav" aria-label="OctoFit sections">
        {navItems.map((item) => (
          <NavLink className="nav-link" key={item.to} to={item.to}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
