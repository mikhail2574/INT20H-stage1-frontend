import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import Profile from './components/Profile'
import Page from './pages/main'

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Page/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />
        </Routes>
      </UserProvider>
    </Router>
  )
}

export default App;
