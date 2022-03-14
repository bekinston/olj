import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Events1List} from './Events1List'
import axios from 'axios'
import {useHttp} from '../hooks/http.hook'

export const Events1Show = () => {
  const [events1, setEvent1] = useState([])
  const {loading, request} = useHttp()

  const fetchEvent1 = useCallback(async () => {
  try {
    const fetched = await request('/api/text/getevent1', 'GET', null, {

    })
    setEvent1(fetched)
  } catch (e) {}
}, [request])


  useEffect(() => {
    fetchEvent1()
  }, [fetchEvent1])


  return (
    <>
      {<Events1List events1={events1} />}
    </>
  )
}
