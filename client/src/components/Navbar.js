import React , {useContext} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import home from '../images/home.svg'
import person from '../images/person.jpeg'
import exit from '../images/exit.svg'


export const Navbar = () => {

  const history = useNavigate()
  const auth = useContext(AuthContext)

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return(

    <div className = "row back2">
      <div className = "container">
        <div className = "nav col s12">
          <div className = "left">
            <button className = "home-btn"><img src={home} className = "home-img"/></button>

          </div>


          <div className = "right personblock">
            <div className = "personname">
              <p className = "persontext">Абдуаханов О.А.</p>
              <p className = "persontext">Бакалавриат</p>
            </div>
            <div className = "personphoto">
              <img src = {person} className = "personimg"/>
            </div>

            <div className = "logout center" onClick={logoutHandler}>
              <img src = {exit} className="logoutimg"/>
              <button className = "logout-btn" >Выйти</button>
            </div>

            <div className = "lang">
              <button className = "lang-btn">Қаз</button>
              <button className = "lang-btna">Рус</button>
              <button className = "lang-btn">Eng</button>
            </div>

            </div>

          </div>
      </div>


    </div>

  )
}
