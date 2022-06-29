
import { useEffect, useState } from 'react' 
import Switch from '../switch/Index'

import './heroes.css'

function HeroesHeader(props) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    props.onReordenate(active)
  }, [active])

  return (
    <div className="flex space-between align-center my-1 heroes-header">
      <span>Encontrados {props.total} herói(s)</span>
      <div className="ordenate">
        <span className='flex align-center'>
          Ordenar por nome - A a Z
          <Switch setValue={(value) => setActive(value)} value={active} />
          <span>Somente favoritos</span>
        </span>
      </div>
    </div>
  )
}

export default HeroesHeader;