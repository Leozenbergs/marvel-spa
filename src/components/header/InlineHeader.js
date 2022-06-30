import React, { useState, useEffect } from 'react';

import SearchInput from '../searchInput/Index';

import './Header.css'

function InlineHeader(props) {
  const [results, setResults] = useState([])

  useEffect(() => {
    props.setHero(results)
  }, [results])

  return (
    <header className="text-center">
      <div className="flex justify-center align-center">
        <img src={"../icons/logo_menor.svg"} alt="logo"/>
        <SearchInput setResults={(value) => setResults(value)} icon="../icons/ic_busca_menor.svg" />
      </div>
    </header>
  )
}

export default InlineHeader;