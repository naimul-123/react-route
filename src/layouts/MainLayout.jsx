import React from 'react'
import Navbar from '../components/navbar/Navbar'

import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const MainLayout = () => {
  return (
    <div>
        <div className='h-16'><Navbar></Navbar></div>
        <div className='min-h-[calc(100vh-116px)]'><Outlet></Outlet></div>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout