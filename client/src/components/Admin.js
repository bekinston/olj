import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'

export const Admin = () => {

  const [subject, addSubject] = useState({
    state:'0',
    name:'',
    mark:'',
    officehours:'',
    contact:''
  })

  const [event1, addEvent1] = useState({
    state:'1',
    name:'',
    type:'',
    place:'',
    date:''
  })

  const subjectchangeHandler = event => {
    addSubject({ ...subject, [event.target.name]: event.target.value })
  }

  const event1changeHandler = event => {
    addEvent1({ ...event1, [event.target.name]: event.target.value })
  }

  const subjectadd = () => {
    axios.post("/api/text/addsubject", subject)
    .then((response) => {
      console.log(response.data.message)
    }, (error) => {
      console.log(error)
    })

  }

  const eventadd = () => {
    axios.post("/api/text/addevent", event1)
    .then((response) => {
      console.log(response.data.message)
    }, (error) => {
      console.log(error)
    })

  }

  return(

    <div class="row">
        <div className="col l4 m6 s12">

          <div class="card white">
            <h5>Добавить предмет</h5>
            <input placeholder="name" name="name" onChange={subjectchangeHandler}/>
            <input placeholder="mark" name="mark" onChange={subjectchangeHandler}/>
            <input placeholder="office-hours" name="officehours" onChange={subjectchangeHandler}/>
            <input placeholder="contact" name="contact" onChange={subjectchangeHandler}/>
            <button onClick={subjectadd}>Добавить</button>

            <h5>Добавить мероприятие</h5>
            <input placeholder="type" name="type" onChange={event1changeHandler}/>
            <input placeholder="name" name="name" onChange={event1changeHandler}/>
            <input placeholder="date" name="date" onChange={event1changeHandler}/>
            <input placeholder="place" name="place" onChange={event1changeHandler}/>
            <button onClick={eventadd}>Добавить</button>

        </div>

      </div>

     </div>

  )
}
