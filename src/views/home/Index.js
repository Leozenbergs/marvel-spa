import { useState } from 'react';
import { orderBy } from 'lodash';

import Header from '../../components/header/Index'
import Heroes from '../../components/heroes/Index'
import HeroesHeader from '../../components/heroes/HeroesHeader'
import api from '../../services/api'

import './Home.css';

const HEROES_LIMIT = 20
const FAVORITES = JSON.parse(localStorage.getItem('favorites')) || {}


function Home() {
  const [heroes, setHeroes] = useState([])
  const [loading, setLoading] = useState(true)
  const [onlyFavorites, setOnlyFavorites] = useState(false)

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
      console.log(err)
    }
  }

  function reordenate(value) {
    let orderedHeroes = value ?
    orderBy(heroes, [hero => hero.name.toLowerCase()], ['desc'])
    : orderBy(heroes, [hero => hero.name.toLowerCase()], ['asc']);
    setHeroes(orderedHeroes)
  }
  
  function toggleOnlyFavorites() {
    setOnlyFavorites(!onlyFavorites)
    if(!onlyFavorites) return fetchHeroes();
    let favoritesIds = Object.keys(FAVORITES).map(item => parseInt(item))
    let favorites = heroes.filter(hero => favoritesIds.includes(hero.id))
    setHeroes(favorites)
  }

  return (
    <div>
      <Header setHeroes={(heroes) => setHeroes(heroes)} />
      <HeroesHeader
        total={heroes.length}
        onReordenate={(active) => reordenate(active)}
        toggleOnlyFavorites={() => toggleOnlyFavorites()}
      />
      <Heroes
        heroes={heroes}
        setHeroes={(heroes) => setHeroes(heroes)}
        fetchHeroes={() => fetchHeroes()}
        loading={loading}
      />
    </div>
  );
}

export default Home;
