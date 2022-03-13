import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'


export const Subject0List = ({ subjects0 }) => {

  const [sub, takeSub] = useState({
    name:''
  })


  return (
  <div className = "row">
    <div className = "col s12">

          { subjects0.map((subject, index) => {





            const takesubject = () => {
              takeSub({name:subject.name})

              axios.post("/api/text/takesubject", sub)
              .then((response) => {
                console.log(response.data)
                //window.location.reload(false)
                //console.log(subject.name)
              }, (error) => {
                console.log(error)
              })
            }

            return (
              <div className = "card z-depth-0 green lighten-5" style = {{marginTop:10, padding:10}}>
                <p className="pcl"><span className = "hspan">Название: </span>{subject.name}</p>
                <p className="pcl"><span className = "hspan">Контакты: </span>{subject.contact}</p>
                <center><button onClick={takesubject}>Выбрать предмет</button></center>
              </div>
            )
          }) }

    </div>
  </div>

)



}
