import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import syllabus from '../images/student-syllabus3.png'
import sulogos from '../images/su-logo-small.png'
import advisor from '../images/advisor.png'
import ind from '../images/ind.png'
import journal from '../images/journal.png'
import schedule from '../images/shedule.png'
import transcript from '../images/transcript.png'
import schedule2 from '../images/schedule2.png'
import exam from '../images/exam.png'
import attest from '../images/attest.png'
import umkd from '../images/umkd.png'
import status from '../images/status.png'
import personal from '../images/persondata.png'
import docs from '../images/docs.png'
import money from '../images/money.png'
import list from '../images/list.png'
import sprav from '../images/sprav.png'
import diploma from '../images/diploma.png'
import library from '../images/library.png'
import bd from '../images/bd.png'
import {Bot} from './Bot'
import {Events1Show} from '../gets/Events1Show'




export const Menu = () => {



  const disciplines = () => {
    axios.post("/api/text/disciplines")
    .then((response) => {
      console.log(response.data.message)
    }, (error) => {
      console.log(error)
    })
  }



  return(
    <div className = "row">

      <div className = "container">

        <div className = "col s8">

          <div className = "col s3 card menu-item center">
            <img src = {syllabus} className = "responsive-img menu-img"/>
            <div>
              <span className = "center">Силлабус</span>
              <p className = "menu-text"></p>
            </div>

          </div>

          <div className = "col s3 card menu-item center">
            <img src = {advisor} className = "responsive-img menu-img"/>
            <div>
              <span className = "center">Мой эдвайзер</span>
              <p className = "menu-text"></p>
            </div>

          </div>

          <div className = "col s3 card menu-item center">
            <img src = {ind} className = "responsive-img menu-img1"/>
            <div>
              <span className = "center">Индивидуальный учебный план</span>
              <p className = "menu-text"></p>
            </div>

          </div>

          <div className = "col s3 card menu-item center">
            <img src = {transcript} className = "responsive-img menu-img"/>
            <div>
              <span className = "center">Транскрипт</span>
              <p className = "menu-text"></p>
            </div>

          </div>

          <div className = "col s3 card menu-item center">
            <img src = {schedule} className = "responsive-img menu-img"/>
            <div>
              <span className = "center">Расписание</span>
              <p className = "menu-text"></p>
            </div>

          </div>

          <div className = "col s3 card menu-item center">
            <img src = {journal} className = "responsive-img menu-img"/>
            <div>
              <span className = "center">Журнал</span>
              <p className = "menu-text"></p>
            </div>

          </div>

          <div className="divider col s10" style = {{marginTop:15, marginBottom:15}}></div>

             <div className = "col s3 card menu-item center">
               <img src = {exam} className = "responsive-img menu-img"/>
               <div>
                 <span className = "center">Расписание экзаменов</span>
                 <p className = "menu-text"></p>
               </div>

             </div>

             <div className = "col s3 card menu-item center">
               <img src = {attest} className = "responsive-img menu-img"/>
               <div>
                 <span className = "center">Аттестация</span>
                 <p className = "menu-text"></p>
               </div>

             </div>

             <div className = "col s3 card menu-item center">
               <img src = {schedule2} className = "responsive-img menu-img"/>
               <div>
                 <span className = "center">Общее расписание</span>
                 <p className = "menu-text"></p>
               </div>

             </div>

             <div className = "col s3 card menu-item center">
               <img src = {umkd} className = "responsive-img menu-img"/>
               <div>
                 <span className = "center">УМКД</span>
                 <p className = "menu-text"></p>
               </div>

             </div>

             <div className = "col s3 card menu-item center">
               <img src = {status} className = "responsive-img menu-img"/>
               <div>
                 <span className = "center">Мой статус</span>
                 <p className = "menu-text"></p>
               </div>

             </div>

             <div className = "col s3 card menu-item center">
               <img src = {personal} className = "responsive-img menu-img"/>
               <div>
                 <span className = "center">Личные данные</span>
                 <p className = "menu-text"></p>
               </div>

             </div>


              <div className="divider col s10" style = {{marginTop:15, marginBottom:15}}></div>

                <div className = "col s3 card menu-item center">
                  <img src = {docs} className = "responsive-img menu-img1"/>
                  <div>
                    <span className = "center">Документы/Инструкции</span>
                    <p className = "menu-text"></p>
                  </div>
                </div>

                <div className = "col s3 card menu-item center">
                  <img src = {money} className = "responsive-img menu-img"/>
                  <div>
                    <span className = "center">Задолженность</span>
                    <p className = "menu-text"></p>
                  </div>
                </div>

                <div className = "col s3 card menu-item center">
                  <img src = {list} className = "responsive-img menu-img"/>
                  <div>
                    <span className = "center">Обходной лист</span>
                    <p className = "menu-text"></p>
                  </div>
                </div>

                <div className = "col s3 card menu-item center">
                  <img src = {syllabus} className = "responsive-img menu-img"/>
                  <div>
                    <span className = "center">Контакты</span>
                    <p className = "menu-text"></p>
                  </div>
                </div>

                <div className = "col s3 card menu-item center">
                  <img src = {sprav} className = "responsive-img menu-img"/>
                  <div>
                    <span className = "center">Справки</span>
                    <p className = "menu-text"></p>
                  </div>
                </div>

                <div className = "col s3 card menu-item center">
                  <img src = {diploma} className = "responsive-img menu-img"/>
                  <div>
                    <span className = "center">Дипломирование</span>
                    <p className = "menu-text"></p>
                  </div>
                </div>

                <div className="divider col s10" style = {{marginTop:15, marginBottom:15}}></div>

                  <div className = "col s3 card menu-item center">
                    <img src = {library} className = "responsive-img menu-img1"/>
                    <div>
                      <span className = "center">Научная библиотека</span>
                      <p className = "menu-text"></p>
                    </div>
                  </div>

                  <div className = "col s3 card menu-item center">
                    <img src = {bd} className = "responsive-img menu-img1"/>
                    <div>
                      <span className = "center">БД научной библиотеки</span>
                      <p className = "menu-text"></p>
                    </div>
                  </div>
              </div>

        <div className = "col s3 right" >

          <div>
            <button className = "register">Регистрация на дистанционный экзамен</button>
          </div>

          <div className = "card cardi">
            <img src = {sulogos}  className = "sulogos"/>
            <p>Годовая регистрация на дисциплины 2022-2023 учебного года</p>
            <p>Читать подробнее <span className="right">25.02.2022</span></p>

          </div>

          <p className = "redy">У Вас нет новых уведомлений: 0 ✉</p>



        </div>

          <Bot/>




      </div>
    </div>

  )
}
