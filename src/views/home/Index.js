import { useState } from 'react';
import Header from '../../components/header/Index'
import Heroes from '../../components/heroes/Index'
import HeroesHeader from '../../components/heroes/HeroesHeader'

import './Home.css';

function Home() {
  const [heroes, setHeroes] = useState([])

  return (
    <div>
      <Header setHeroes={setHeroes} />
      <HeroesHeader total={heroes.length} />
      <Heroes heroes={heroes} setHeroes={setHeroes} />
    </div>
  );
}

export default Home;
