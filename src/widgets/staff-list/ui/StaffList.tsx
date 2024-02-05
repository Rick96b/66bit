import { EmployeeCard, useEmployeeApi } from 'entities/employee'
import React, { useRef } from 'react'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'

interface EmployeesListProps {

}

const EmployeesList: React.FC<EmployeesListProps> = () => {
    const {employees, isLoading, error, reloadEmployees, addEmployeesByPage} = useEmployeeApi({url:'https://frontappapi.dock7.66bit.ru/api/news/get'})
    const newsListRef = useRef(null)
    useInfiniteScroll(newsListRef, addEmployeesByPage)
    
    return (
        <section ref={newsListRef}>
            {employees.map(EmployeesData => 
                <EmployeeCard employee={EmployeesData} />    
            )}
        </section>
    )
}

export default EmployeesList