

import './heroes.css'

function HeroesHeader(props) {

  return (
    <div className="flex space-between align-center my-1">
      <span>Encontrados {props.total} herói(s)</span>
      <div>
        <span>
          Ordenar por nome - A a Z
          <button>ordenar</button>
        </span>
        <span>Somente favoritos</span>
      </div>
    </div>
  )
}

export default HeroesHeader;