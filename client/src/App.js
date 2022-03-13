import {AuthContext} from './context/AuthContext'
import {useRoutes} from './routes'
import {useAuth} from './hooks/auth.hook'
import {BrowserRouter as Router} from 'react-router-dom'
import {Navbar} from './components/Navbar'


function App() {
  const {login, logout, id, password, auth} = useAuth()
  const isAuthenticated = !!auth
  const routes = useRoutes(isAuthenticated)

  return (
    <AuthContext.Provider value={{
      login, logout, id, password, auth
    }}>
    <Router>
    <div className = "back2">
    {isAuthenticated && <Navbar/>}

      {routes}

    </div>

    </Router>
    </AuthContext.Provider>
  )
}

export default App;
