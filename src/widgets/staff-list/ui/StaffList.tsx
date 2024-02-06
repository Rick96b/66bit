import { Gender, Position, Stack, useEmployeeApi } from 'entities/employee'
import React, { useRef } from 'react'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'

import styles from './StaffList.module.scss'

interface EmployeesListProps {
    filters?: {
        gender?: Gender
        position?: Position
        stack?: Stack
        name?: string
    }
}

const EmployeesList: React.FC<EmployeesListProps> = props => {
    const {
        filters
    } = props

    const {employees, isLoading, error, addEmployeesByPage} = useEmployeeApi({
        url:'https://frontend-test-api.stk8s.66bit.ru/api/Employee',
        filters: filters
    })
    const newsListRef = useRef(null)
    useInfiniteScroll(newsListRef, addEmployeesByPage)
    
    return (
        <section ref={newsListRef} className='container'>
            <table className={styles.employeesTable}>
                <thead>
                    <tr>
                        <td>ФИО</td>
                        <td>Должность</td>
                        <td>Телефон</td>
                        <td>Дата рождения</td>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(EmployeesData => 
                        <tr>
                            <td>{EmployeesData.name}</td>
                            <td>{EmployeesData.position}</td>
                            <td>{EmployeesData.phone}</td>
                            <td>{EmployeesData.birthdate}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    )
}

export default EmployeesList