import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Subject0List} from './Subject0List'
import axios from 'axios'


export const Subject0Show = () => {
  const [subjects0, setSubject0] = useState([])

  const fetchSubject0 = useCallback(async () => {
    try {
      const fetched = await axios.get("/api/text/getsubject0")
      .then((response) => {
        setSubject0(response.data)
      }, (error) => {
        console.log(error)
      })

    } catch (e) {}
  }, [])

  useEffect(() => {
    fetchSubject0()
  }, [fetchSubject0])


  return (
    <>
      {<Subject0List subjects0={subjects0} />}
    </>
  )
}
