import './layout.css'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <div className='layout'>
            <Navbar id="home"/>
            <Outlet/>
            <Footer id="footer"/>
    </div>
  )
}
