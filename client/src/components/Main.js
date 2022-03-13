import React, {useContext, useEffect, useState} from 'react'
import {AuthContext} from '../context/AuthContext'
import sulogo from '../images/sulogo.png'

export const Main = () => {
  const auth = useContext(AuthContext)
  const [form, setForm] = useState({
  name: '', password: ''
})

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

const loginHandler = async () => {
  try {
    const id = '' + form.name
    const password = '' + form.password

    auth.login(id, password)
  } catch (e) {}
}

  return(
    <div className = "back">
      <div className = "container">
        <div className = "row">
          <div className = "col s4 center offset-s4">
          <img src = {sulogo} className = "logo responsive img" style = {{marginLeft:30}}/>


            <div className = "login center frame z-depth-1">






              <div class="card-tabs tabber">
                <ul class="tabs">
                  <li class="tab"><a className="active an">Қаз</a></li>
                  <li class="tab"><a className="active rus">Рус</a></li>
                  <li class="tab"><a className="active an">Eng</a></li>
                </ul>
            </div>



              <p className = "head" style = {{marginTop:50, marginBottom:70}}>Учебная система</p>
              <input className = "inp" type="text" placeholder="Логин" id = "name" name = "name" value = {form.name} onChange={changeHandler}/>
              <input className = "inp" type="password" placeholder="Пароль" id = "password" name = "password"  value = {form.password} onChange={changeHandler}/>
              <button onClick = {loginHandler} className = "button" style = {{marginTop:30, marginBottom:70}}>ВОЙТИ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
