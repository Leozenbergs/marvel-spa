import React, { useEffect, useState } from 'react';
import SearchInput from '../searchInput/Index'

import '../../index.css'
import './Header.css'

export default function Header(props) {
  const [results, setResults] = useState([])

  useEffect(() => {
    props.setHeroes(results)
  }, [results])

  return (
    <div className="text-center">
      <div className="flex justify-center align-center">
        <img src={"icons/logo.svg"} alt="logo"/>
      </div>
      <div className="mb-2">
        <h1 className="mb-0">Explore o universo</h1>
        <span className="small">
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!
        </span>
      </div>
      <SearchInput setResults={(value) => setResults(value)} icon="icons/ic_busca_menor.svg" />
    </div>
  )
}