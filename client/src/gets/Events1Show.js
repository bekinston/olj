import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Events1List} from './Events1List'
import axios from 'axios'


export const Events1Show = () => {
  const [event1, setEvent1] = useState([])

  const fetchEvent1 = useCallback(async () => {
    try {


      const fetched = await axios.get("/api/text/getevent1")
      .then((response) => {
        setEvent1(response.data)
      }, (error) => {
        console.log(error)
      })

    } catch (e) {}
  }, [])

  useEffect(() => {
    fetchEvent1()
  }, [fetchEvent1])


  return (
    <>
      {<Events1List event1={event1} />}
    </>
  )
}
