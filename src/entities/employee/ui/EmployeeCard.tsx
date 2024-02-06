import React from 'react'
import { Employee } from '../model/types'

interface EmployeeCardProps {
    employee: Employee
}

const EmployeeCard:React.FC<EmployeeCardProps> = props => {
    const {
        employee
    } = props

    return (
        <article>
            <h2>{employee.name}</h2>
            <p>{employee.phone}</p>
        </article>
    )
}

export default EmployeeCard