import { Routes, Route } from 'react-router-dom'
import {NavBar, RequireAuth} from './components/index'
import { Home, Login } from './routes/index'

function App() {

  return (
    <div className="App">
      <NavBar />
      <h1>APP</h1>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={
          <RequireAuth>
            <Home />
          </RequireAuth>}
        />
      </Routes>
    </div>
  )
}

export default App
