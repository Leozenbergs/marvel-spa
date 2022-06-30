import './rating.css'

export default function Rating() {
  let length = [1, 2, 3, 4, 5]
  return (
    <div className="flex flex-wrap align-center mt-1">
      <b>Rating: </b>
      <div className="ml-1">
        { length.map((item, index) => 
          <img src={'../icons/avaliacao_on.svg'} alt="star" key={index} />
        )}
      </div>
    </div>
  )
}