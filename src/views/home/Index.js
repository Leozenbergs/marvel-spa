import { Container } from '../../components/container/Index'
import Header from '../../components/header/Index'
import Footer from '../../components/footer/Index'
import Heroes from '../../components/heroes/Index'

import './Home.css';

function Home() {
  return (
    <div>
      <Container className="home">
        <Header/>
        <Heroes />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
