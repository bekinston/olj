import React, {useCallback, useContext, useEffect, useState} from 'react'
import {SubjectsList} from './SubjectsList'
import axios from 'axios'


export const SubjectsShow = () => {
  const [subjects, setSubject] = useState([])

  const fetchSubject = useCallback(async () => {
    try {
      const fetched = await axios.get("/api/text/getsubject")
      .then((response) => {
        setSubject(response.data)
      }, (error) => {
        console.log(error)
      })

    } catch (e) {}
  }, [])

  useEffect(() => {
    fetchSubject()
  }, [fetchSubject])


  return (
    <>
      {<SubjectsList subjects={subjects} />}
    </>
  )
}
