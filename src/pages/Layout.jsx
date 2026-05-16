import React, { Suspense } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

export default function Layout() {
  return (
    <div>
      <Header/>
      <Suspense fallback={<Loader />}>
        <Outlet/>
      </Suspense>
      <Footer/>
    </div>
  )
}
