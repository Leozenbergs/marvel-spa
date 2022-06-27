import { Container } from '../../components/container/Index'
import Header from '../../components/header/Index'
import Heroes from '../../components/heroes/Index'

import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Container>
        <Header/>
        <Heroes />
      </Container>
    </div>
  );
}

export default Home;
