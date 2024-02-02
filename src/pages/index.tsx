import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./Home').then(module => ({default: module.Home})))

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
     </Routes>
  )
}

export default Routing;