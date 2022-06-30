import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import InlineHeader from '../../components/header/InlineHeader'
import HeroDetails from '../../components/heroes/HeroDetails'
import LastReleases from '../../components/lastReleases/Index'
import api from '../../services/api'

import './Character.css'


function Character() {
  const [hero, setHero] = useState(null)
  let { characterId } = useParams();
  

  async function fetchCharacter() {
    try {
      const { data } = await api.get(`characters/${characterId}`)
      setHero(data.data.results[0])
    } catch (err) {
      console.log(err)
    }
  }
  
  useEffect(() => {
    fetchCharacter()
  }, [])


  return !!hero && (
    <div>
      <InlineHeader setHero={(hero) => setHero(hero)} />
      <HeroDetails hero={hero} />
      <LastReleases />
    </div>
  )
}

export default Character