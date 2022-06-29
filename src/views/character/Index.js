import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import api from '../../services/api'
import './Character.css'


function Character() {
  const [characterDetail, setCharacterDetail] = useState(null)
  let { characterId } = useParams();
  

  async function fetchCharacter() {
    try {
      const { data } = await api.get(`characters/${characterId}`)
      setCharacterDetail(data.data.results[0])
    } catch (err) {
      alert(err)
    }
  }
  
  useEffect(() => {
    fetchCharacter()
  }, [])


  return (
    !!characterDetail && <h1>teste {characterDetail.name}</h1>
  )
}

export default Character