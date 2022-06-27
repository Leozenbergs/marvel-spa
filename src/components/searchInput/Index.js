import './searchInput.css'
import api from '../../services/api'

async function onEnter(e) {
  if (e.key === "Enter") {
    const character = await api.get('characters', {
      params: {
        name: e.target.value
      }
    })
    console.log(character);
  }
}

export default function SearchInput() {
  return (
    <div>
      <span className="icon"><img src={"icons/ic_busca_menor.svg"} /></span>
      <input className='searchInput' name='searchInput' placeholder='Procure por heróis' onKeyPress={(event) => onEnter(event)} />
    </div>
  )
}