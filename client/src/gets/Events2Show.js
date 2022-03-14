import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Events2List} from './Events2List'
import axios from 'axios'
import {useHttp} from '../hooks/http.hook'

export const Events2Show = () => {
  const [event2, setEvent2] = useState([])
  const {loading, request} = useHttp()

  const fetchEvent2 = useCallback(async () => {
  try {
    const fetched = await request('/api/text/getevent2', 'GET', null, {

    })
    setEvent2(fetched)
  } catch (e) {}
}, [request])


  useEffect(() => {
    fetchEvent2()
  }, [fetchEvent2])


  return (
    <>
      {<Events2List event2={event2} />}
    </>
  )
}
