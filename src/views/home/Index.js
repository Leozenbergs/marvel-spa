import { useState } from 'react';
import { orderBy } from 'lodash';

import Header from '../../components/header/Index'
import Heroes from '../../components/heroes/Index'
import HeroesHeader from '../../components/heroes/HeroesHeader'

import './Home.css';

function Home() {
  const [heroes, setHeroes] = useState([])

  function reordenate(value) {
    let orderedHeroes = value ?
      orderBy(heroes, [hero => hero.name.toLowerCase()], ['desc'])
      : orderBy(heroes, [hero => hero.name.toLowerCase()], ['asc']);
    setHeroes(orderedHeroes)
  }

  return (
    <div>
      <Header setHeroes={(heroes) => setHeroes(heroes)} />
      <HeroesHeader total={heroes.length} onReordenate={(active) => reordenate(active)} />
      <Heroes heroes={heroes} setHeroes={(heroes) => setHeroes(heroes)} />
    </div>
  );
}

export default Home;
