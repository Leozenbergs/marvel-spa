import './Hqs.css'

export default function Hqs({ total }) {
  return (
    <span>
      <b>Quadrinhos</b>
      <div className="flex flex-wrap align-center mt-1">
        <img src={'../icons/ic_quadrinhos.svg'} alt="Quadrinhos" />
        <span className='ml-1'>{ total }</span>
      </div>
    </span>
  )
}