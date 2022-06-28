import React, { useState, useEffect } from 'react'

import Loader from '../loader/Index'

import './heroes.css'
import api from '../../services/api'

const HEROES_LIMIT = 20


function Hero({ name, thumbnail }) {
  return (
    <div className="hero pointer">
      <img src={`${thumbnail.path}/standard_xlarge.jpg`} alt={name} className="hero-thumb" />
      <b className="flex space-between align-start">{name} <img src={'icons/favorito_02.svg'} alt='favorite' /></b>
    </div>
  )
}


export default function Heroes() {
  const [heroes, setHeroes] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchHeroes() {
    try {
      const { data } = await api.get('characters', {
        params: {
          limit: HEROES_LIMIT
        }
      })
      setHeroes(data.data.results)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      alert(err)
    }
  }
  
  useEffect(() => {
    fetchHeroes()
  }, [])

  return (
    <div className="flex flex-wrap justify-center">
      <Loader visible={loading} />
      {heroes.map((hero, index) => 
        <Hero name={hero.name} thumbnail={hero.thumbnail}  key={index} />
      )}
    </div>
  )
}