import React, { useState, useEffect } from 'react'

import './heroes.css'
import api from '../../services/api'

const HEROES_LIMIT = 20


export default function Heroes() {
  const [heroes, setHeroes] = useState([])

  async function fetchHeroes() {
    const { data } = await api.get('characters', {
      params: {
        limit: HEROES_LIMIT
      }
    })
    setHeroes(data.data.results)
    console.log(heroes);
  }
  
  useEffect(() => {
    fetchHeroes()
  }, [])

  return (
    <div className="flex flex-wrap">
      {heroes.map((hero, index) => 
        <span>
          {hero.name}
          <img src={`${hero.thumbnail.path}/portrait_medium.jpg`} alt={hero.name} key={index} />
        </span>
      )}
    </div>
  )
}