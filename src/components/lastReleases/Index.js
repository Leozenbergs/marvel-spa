import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import api from '../../services/api'

import './lastReleases.css'

const LIMIT = 10

function LastReleases() {
  const [comics, setComics] = useState([])
  let { characterId } = useParams();

  async function fetchComics() {
    try {
      const { data } = await api.get(`characters/${characterId}/comics`, {
        params: { limit: LIMIT }
      })
      setComics(data.data.results)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchComics()
  }, [])

  return !!comics && (
    <div className='mt-1' style={{width: '100%'}}>
      <h3 className='title'>
        <b>Últimos lançamentos: </b>
      </h3>

      <div className='flex space-between align-center flex-wrap'>
        { comics.map((item, index) => 
          <span className='mt-1' key={index}>
            <img src={`${item.thumbnail.path}/standard_medium.${item.thumbnail.extension}`} alt={item.title} />
            <p>{item.title}</p>
          </span>
        )}
      </div>

    </div>
  )
}

export default LastReleases;