import './searchInput.css'

export default function searchInput() {
  return (
    <div>
      <span className="icon"><img src={"icons/ic_busca_menor.svg"} /></span>
      <input className='searchInput' name='searchInput' placeholder='Procure por heróis' />
    </div>
  )
}