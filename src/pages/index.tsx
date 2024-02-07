import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./Home').then(module => ({default: module.Home})))
const Employee = lazy(() => import('./Employee').then(module => ({default: module.Employee})))

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Employee />} />
     </Routes>
  )
}

export default Routing;