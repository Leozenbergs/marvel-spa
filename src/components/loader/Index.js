import './Loader.css'

function Loader({ visible }) {
  return visible && (
    <div className='loaderWrapper'>
      <div className="loader"></div>
    </div>
  )
}

export default Loader