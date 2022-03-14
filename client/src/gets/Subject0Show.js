import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Subject0List} from './Subject0List'
import axios from 'axios'
import {useHttp} from '../hooks/http.hook'

export const Subject0Show = () => {
  const [subjects0, setSubject0] = useState([])
  const {loading, request} = useHttp()

  const fetchSubject0 = useCallback(async () => {
  try {
    const fetched = await request('/api/text/getsubject0', 'GET', null, {

    })
    setSubject0(fetched)
  } catch (e) {}
}, [request])


  useEffect(() => {
    fetchSubject0()
  }, [fetchSubject0])


  return (
    <>
      {<Subject0List subjects0={subjects0} />}
    </>
  )
}
