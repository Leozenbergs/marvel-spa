import { Outlet } from "react-router-dom";
import { Container } from '../components/container/Index'
import Footer from '../components/footer/Index'

import './base.css'


export default function Base() {

  return (
    <div>
      <Container className="layout">
        <Outlet />
      </Container>
      <Footer />
    </div>
  )
}
