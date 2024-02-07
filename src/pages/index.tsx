import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Breadcrumbs } from 'widgets/breadcrumbs'
import { Header } from 'widgets/header'

const Home = lazy(() => import('./Home').then(module => ({default: module.Home})))
const Employee = lazy(() => import('./Employee').then(module => ({default: module.Employee})))

const Routing = () => {
  return (
    <>
      <Header />
      <Breadcrumbs pageName='Список сотрудников' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Employee />} />
      </Routes>
    </>
  )
}

export default Routing;