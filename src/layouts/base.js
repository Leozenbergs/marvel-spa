import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Container } from '../components/container/Index'
import Footer from '../components/footer/Index'

import './base.css'


export default function Base() {
  let navigate = useNavigate()
  let { pathname } = useLocation()
  const { characterId } = useParams()

  useEffect(() => {
    if(pathname === '/') navigate('characters')
  }, [])

  return (
    <div className={pathname === '/characters/' + characterId ? 'character': ''}>
      <Container className='layout'>
        <Outlet />
      </Container>
      <Footer />
    </div>
  )
}
