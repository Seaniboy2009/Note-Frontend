import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import NoteItem from '../components/NoteItem'
import { DefaultURL } from '../api/DefaultURL';
import style from '../styles/NotePage.module.css'

const NotePage = () => {
  const { id } = useParams()
  const [note, setNote] = useState({})

  useEffect(() => {
    const getNotes = async () => {
      const response = await fetch(`${DefaultURL}/api/notes/${id}`)
      const data = await response.json()
      setNote(data)
      console.log(data)
   }
    
    // Set a timer to call the get notes after x seconds
    const timer = setTimeout(() => {
      getNotes()
    },)

    // clear the timer
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <NoteItem {...note} notePage />
  )
}

export default NotePage