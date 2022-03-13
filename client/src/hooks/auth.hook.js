import {useState, useCallback, useEffect} from 'react'
import {AuthContext} from '../context/AuthContext'

const storageName = 'userData'

export const useAuth = () => {

  const [id, setId] = useState(null)
  const [password, setPassword] = useState(null)
  const [auth, setAuth] = useState(false)

  const login = useCallback((id, password) => {
    setId(id)
    setPassword(password)

    if(password == "Oljas0901" && id == "010921500785"){
      setAuth(true)
    }

    localStorage.setItem(storageName, JSON.stringify({
      id: id, password: password
    }))
  }, [])


  const logout = useCallback(() => {
    setId(null)
    setPassword(null)
    setAuth(false)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))

    if (data && data.password) {
      login(data.id, data.password)
    }

  }, [login])


  return { login, logout, id, password, auth}
}
