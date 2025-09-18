import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import Users from './pages/Users'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Layout>
  )
}

export default App