import './movies.css'

export default function Movies({ total }) {
  return (
    <span>
      <b>Filmes</b>
      <div className="flex flex-wrap align-center mt-1">
        <img src={'../icons/ic_trailer.svg'} alt="Quadrinhos" />
        <span className='ml-1'>{ total }</span>
      </div>
    </span>
  )
}