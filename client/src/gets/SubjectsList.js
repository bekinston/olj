import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'


export const SubjectsList = ({ subjects }) => {

  const [sub, takeSub] = useState({
    name:''
  })


  return (
  <div className = "row">
    <div className = "col s12">

          { subjects.map((subject, index) => {

            const delsubject = () => {
              takeSub({name:subject.name})
              axios.post("/api/text/delsubject", sub)
              .then((response) => {
                console.log(response.data.message)

                //window.location.reload(false)
              }, (error) => {
                console.log(error)
              })
            }

            return (
              <div className = "card z-depth-0 green lighten-5" style = {{marginTop:10, padding:10}}>
                <p className="pcl"><span className = "hspan">Название: </span>{subject.name}</p>
                <p className="pcl"><span className = "hspan">Контакты: </span>{subject.contact}</p>
                <p className="pcl"><span className = "hspan">Офис-часы: </span>{subject.officehours}</p>
                <p className="pcl"><span className = "hspan">Текущий балл: </span>{subject.mark}%</p>
                <center><button onClick={delsubject}>убрать предмет</button></center>
              </div>
            )
          }) }

    </div>
  </div>

)



}
