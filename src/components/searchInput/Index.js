import { useLocation, useParams } from "react-router-dom";
import api from '../../services/api'

import './searchInput.css'

const HEROES_LIMIT = 20


function buildParams(e) {
  const params = {
    limit: HEROES_LIMIT
  }
  if(!!e.target.value) params.name = e.target.value

  return params
}

async function onEnter(e, props) {
  const params = buildParams(e)
  if (e.key === "Enter") {
    const results = await api.get('characters', {
      params
    })
    props.setResults(results.data.data.results)
  }
}

export default function SearchInput(props) {
  let { pathname } = useLocation()
  const { characterId } = useParams()

  return (
    <div className={`${pathname === '/characters/' + characterId ? 'char': ''}`}>
      <span className="icon">
        <img src={props.icon} alt="Search" />
      </span>
      <input className='searchInput' name='searchInput' placeholder='Procure por heróis' onKeyPress={(event) => onEnter(event, props)} />
    </div>
  )
}