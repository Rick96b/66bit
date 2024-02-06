import { Breadcrumbs } from '@mui/material'
import { Gender, Position, Stack } from 'entities/employee'
import React, { useState } from 'react'
import { StaffList } from 'widgets'
import { Filter } from 'widgets/filter'
import { Header } from 'widgets/header'
import EmployeesList from 'widgets/staff-list/ui/StaffList'

type filters = {
  gender?: Gender
  position?: Position
  stack?: Stack
  name?: string
}



const Home = () => {
  const [filters, setFilters] = useState<filters>({})

  return (
    <>
      <Header />
      <Breadcrumbs>

      </Breadcrumbs>
      <Filter changeFilters={setFilters}/>
      <EmployeesList filters={filters}/>
    </>
  )
}

export default Home