import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Profile from "./components/Profile";
import Page from "./pages/main";
import Quest from "./components/Quest";

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/quest" element={<Quest />} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
