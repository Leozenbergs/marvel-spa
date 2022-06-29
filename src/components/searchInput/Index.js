import './searchInput.css'
import api from '../../services/api'

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
  return (
    <div>
      <span className="icon"><img src={"icons/ic_busca_menor.svg"} /></span>
      <input className='searchInput' name='searchInput' placeholder='Procure por heróis' onKeyPress={(event) => onEnter(event, props)} />
    </div>
  )
}