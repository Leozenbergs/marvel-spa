import { useParams } from 'react-router-dom'

import Hqs from '../hqs/Index'
import Movies from '../movies/Index'
import Rating from '../rating/Index'
import LastRelease from '../lastReleases/LastRelease'

import './heroes.css'

const FAVORITES = JSON.parse(localStorage.getItem('favorites')) || {}

function HeroDetails(props) {
  const { characterId } = useParams()
  let availableComics = props.hero?.comics?.available
  let totalMovies = props.hero?.stories?.available
  let lastUpdated = props.hero?.modified


  function isFavorited() {
    return Object.keys(FAVORITES).includes(characterId)
  }

  return !!props.hero && (
    <div className='flex details'>
      <div className='description'>
        <div className='flex space-between flex-wrap align-center'>
          <h3 className='hero-name'>{props.hero.name}</h3>
          <img src={isFavorited() ? '../icons/favorito_03.svg' : '../icons/favorito_02.svg'} />
        </div>
        {props.hero.description}
        <div className="flex space-between flex-wrap align-center" style={{ marginTop: '50px'}}>
          <Hqs total={availableComics} />
          <Movies total={totalMovies} />
        </div>
        <Rating />
        <LastRelease lastUpdated={lastUpdated} />
      </div>
      <div className='details-thumb text-right'>
        <img
          src={`${props.hero.thumbnail?.path}/portrait_uncanny.${props.hero.thumbnail?.extension}`}
          alt={props.hero.name}
        />
      </div>
    </div>
  )
}

export default HeroDetails;