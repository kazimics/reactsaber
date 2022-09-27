import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
const Home = lazy(() => import('pages/Home'))
const Login = lazy(() => import('pages/Home'))

const routes = [
  {
    path: '/',
    element: <Home />
  }
]

export default routes
