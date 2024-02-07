import { EmployeeCard, useEmployee } from 'entities/employee'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Header } from 'widgets/header'

const Employee = () => {
    const id = useParams().id
    const {employee, isLoading} = useEmployee(`https://frontend-test-api.stk8s.66bit.ru/api/Employee/${id}`)

    if(isLoading) return <></>

    if(employee) {
        return (
            <>
                <Header />
                <EmployeeCard employee={employee} />
            </>
        )
    }
    else return <></>
}

export default Employee