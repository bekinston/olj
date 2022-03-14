import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {Menu} from './components/Menu'
import {Main} from './components/Main'
import {Admin} from './components/Admin'



export const useRoutes = isAuthenticated => {
  if(isAuthenticated){
    return(
      <Routes>
        <Route path="/menu" element ={<Menu/>}/>
        <Route path="*" element={<Navigate to="/menu"/>}/>
        <Route path = "/admin" element={<Admin/>}/>
      </Routes>
    )
  }
  return (
    <>

      <Routes>
        <Route path="/" element ={<Main/>}/>
        <Route path="*" element={<Navigate to=""/>}/>
        <Route path = "/admin" element={<Admin/>}/>
      </Routes>

    </>

  )
}
