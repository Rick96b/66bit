import { Gender, Position, Stack } from 'entities/employee'
import { useState } from 'react'
import { StaffList } from 'widgets/staff-list'
import { Filter } from 'widgets/filter'

type filters = {
  gender?: Gender
  position?: Position
  stack?: Stack
  name?: string
}

const Home = () => {
  const [filters, setFilters] = useState<filters>({})
  console.log(filters)
  return (
    <>
      <Filter changeFilters={setFilters}/>
      <StaffList filters={filters}/>
    </>
  )
}

export default Home