import { Breadcrumbs } from '@mui/material'
import React from 'react'
import { StaffList } from 'widgets'
import { Filter } from 'widgets/filter'
import { Header } from 'widgets/header'

const Home = () => {
  return (
    <>
      <Header />
      <Breadcrumbs>

      </Breadcrumbs>
      <Filter />

    </>
  )
}

export default Home