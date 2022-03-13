import {createContext} from 'react'

function noop() {}

export const AuthContext = createContext({
  id:null,
  password:null,
  login: noop,
  logout: noop,
  isAuthenticated: false
})
