import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Topbar } from './components/Topbar'
import { Speedrunning } from './pages/Speedrunning'
import { Strats } from './pages/Strats'
import { Test } from './pages/Test'

function App() {

  return (
    <Router>
      <div className="app-container">
        <Topbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/speedrun' element={<Speedrunning />} />
          <Route path='/strats' element={<Strats />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
