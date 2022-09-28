import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import Login from 'pages/Login'
import Resgister from 'pages/Resgister'
const Home = lazy(() => import('pages/Home'))

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/resgister',
    element: <Resgister />
  }
]

export default routes
