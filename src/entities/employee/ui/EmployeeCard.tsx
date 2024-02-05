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
            <h2>{employee.title}</h2>
            <p>{employee.content}</p>
        </article>
    )
}

export default EmployeeCard