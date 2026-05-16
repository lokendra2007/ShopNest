import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Outlet, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Dynamic from './pages/Dynamic'
import Product from './pages/Product'
import Cart from './pages/Cart'

export default function App() {

  const rauters = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/products",
          element: <Product />
        },
        {
          path: "/contact",
          element: <Contact />
        },
         {
          path: "/cart",
          element: <Cart/>
        },
        {
          path: "/products/:id",
          element: <Dynamic />
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={rauters} />
    </div>
  )
}
