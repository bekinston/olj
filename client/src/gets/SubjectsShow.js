import React, {useCallback, useContext, useEffect, useState} from 'react'
import {SubjectsList} from './SubjectsList'
import axios from 'axios'
import {useHttp} from '../hooks/http.hook'


export const SubjectsShow = () => {
  const [subjects, setSubject] = useState([])
  const {loading, request} = useHttp()

  const fetchSubject = useCallback(async () => {
  try {
    const fetched = await request('/api/text/getsubject', 'GET', null, {

    })
    setSubject(fetched)
  } catch (e) {}
}, [request])



  useEffect(() => {
    fetchSubject()
  }, [fetchSubject])


  return (
    <>
      {<SubjectsList subjects={subjects} />}
    </>
  )
}
