import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react'

import Loader from '../loader/Index'

import './heroes.css'
import api from '../../services/api'

const HEROES_LIMIT = 20


function Hero({ name, thumbnail, id }) {
  let navigate = useNavigate()

  return (
    <div className="hero pointer" onClick={() => navigate(`${id}`)}>
      <img
        src={`${thumbnail.path}/standard_xlarge.jpg`}
        alt={name}
        className="hero-thumb"
      />
      <b className="flex space-between align-start">
        {name}
        <img src={'icons/favorito_02.svg'} alt='favorite' />
      </b>
    </div>
  )
}


function Heroes(props) {
  const [loading, setLoading] = useState(true)

  async function fetchHeroes() {
    try {
      const { data } = await api.get('characters', {
        params: {
          limit: HEROES_LIMIT
        }
      })
      props.setHeroes(data.data.results)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.table(err)
    }
  }

  useEffect(() => {
    fetchHeroes()
  }, [])

  return (
    <div className="flex flex-wrap space-between">
      <Loader visible={loading} />
      {!!props.heroes && props.heroes.map((hero, index) => 
        <Hero name={hero.name} thumbnail={hero.thumbnail} id={hero.id} key={index} />
      )}
    </div>
  )
}
export default Heroes;