import './Container.css'

const ContainerFluid = (props) => {
  return (
    <div className="container fluid">
      { props.children }
    </div>
  )
}

const Container = (props) => {
  return (
    <div className='container' {...props}>
      { props.children }
    </div>
  )
}

export { Container, ContainerFluid }