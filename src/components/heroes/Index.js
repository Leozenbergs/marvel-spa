import { clone } from 'lodash';

import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react'

import Loader from '../loader/Index'

import './heroes.css'

const FAVORITES = JSON.parse(localStorage.getItem('favorites')) || {}

function Hero(props) {
  let navigate = useNavigate()
  
  function buildUrl() {
    return props.favorite ?
    'icons/favorito_03.svg'
    : 'icons/favorito_02.svg'
  }
  
  return (
    <div className="hero pointer" onClick={() => navigate(`${props.id}`)}>
      <img
        src={`${props.thumbnail.path}/standard_xlarge.${props.thumbnail.extension}`}
        alt={props.name}
        className="hero-thumb"
        />
      <b className="flex space-between align-start" onClick={(e) => props.toggleFavorite(e, props.id)}>
        {props.name}
        <img
          src={buildUrl()}
          alt='favorite'
          />
      </b>
    </div>
  )
}


function Heroes(props) {
  const [favorites, setFavorites] = useState(FAVORITES)
  
  function toggleFavorite(e, id) {
    e.stopPropagation();
    let aux = clone(favorites)
    aux[id] ? delete aux[id] : aux[id] = id
    setFavorites(aux)
    localStorage.setItem('favorites', JSON.stringify(aux))
  }


  useEffect(() => {
    props.fetchHeroes()
  }, [favorites])

  return (
    <div className="flex flex-wrap space-between heroes">
      <Loader visible={props.loading} />
      {!!props.heroes && props.heroes.map((hero, index) => 
        Object.keys(favorites).length && <Hero
          id={hero.id}
          name={hero.name}
          thumbnail={hero.thumbnail}
          favorite={!!favorites[hero.id]}
          toggleFavorite={(e) => toggleFavorite(e, hero.id)}
          key={index}
        />
      )}
    </div>
  )
}
export default Heroes;