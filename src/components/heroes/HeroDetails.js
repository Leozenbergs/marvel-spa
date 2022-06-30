import './heroes.css'


function HeroDetails(props) {
  return props.hero && (
    <div style={{width: '100%'}}>
      <div style={{width: '30%', display: 'inline-block'}}>
        <h3>{props.hero.name}</h3>
        {props.hero.description}
      </div>
      <div style={{width: '70%', display: 'inline-block'}}>THUMB</div>
    </div>
  )
}

export default HeroDetails;