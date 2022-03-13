import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Events2List} from './Events2List'
import axios from 'axios'


export const Events2Show = () => {
  const [event2, setEvent2] = useState([])

  const fetchEvent2 = useCallback(async () => {
    try {


      const fetched = await axios.get("/api/text/getevent2")
      .then((response) => {
        setEvent2(response.data)
      }, (error) => {
        console.log(error)
      })

    } catch (e) {}
  }, [])

  useEffect(() => {
    fetchEvent2()
  }, [fetchEvent2])


  return (
    <>
      {<Events2List event2={event2} />}
    </>
  )
}
