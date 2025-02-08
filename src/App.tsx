import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import Auth from './components/Auth'
import Profile from './components/Profile'

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />
        </Routes>
      </UserProvider>
    </Router>
  )
}

export default App
