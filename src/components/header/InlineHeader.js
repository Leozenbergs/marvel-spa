import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchInput from '../searchInput/Index';

import './Header.css'

function InlineHeader(props) {
  const [results, setResults] = useState([])
  let navigate = useNavigate();

  useEffect(() => {
    if(!!results[0]?.id) navigate(`/marvel-spa/characters/${results[0]?.id}`)
    props.setHero(results[0])
  }, [results])

  return (
    <div className="text-center inline-header">
      <div className="flex justify-center align-center flex-wrap">
        <img src={"../icons/logo_menor.svg"} alt="logo" className='mini-logo'/>
        <SearchInput setResults={(value) => setResults(value)} icon="../icons/ic_busca_menor.svg" />
      </div>
    </div>
  )
}

export default InlineHeader;