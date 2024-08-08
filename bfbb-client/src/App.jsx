import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Topbar } from './components/Topbar'

function App() {

  return (
    <Router>
      <div className="app-container">
        <Topbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
