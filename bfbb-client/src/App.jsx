import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Topbar } from './components/Topbar'
import { Speedrunning } from './pages/Speedrunning'

function App() {

  return (
    <Router>
      <div className="app-container">
        <Topbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/speedrun' element={<Speedrunning />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
