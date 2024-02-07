import { Gender, Position, Stack, useEmployeeApi } from 'entities/employee'
import React, { useRef } from 'react'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'

import styles from './StaffList.module.scss'
import { Link } from 'react-router-dom'
import Loader from 'shared/components/Loader'

interface StaffListProps {
    filters?: {
        gender?: Gender
        position?: Position
        stack?: Stack
        name?: string
    }
}

const StaffList: React.FC<StaffListProps> = props => {
    const {
        filters
    } = props

    const {employees, isLoading, error, addEmployeesByPage} = useEmployeeApi({
        url:'https://frontend-test-api.stk8s.66bit.ru/api/Employee',
        filters: filters
    })
    const newsListRef = useRef(null)
    useInfiniteScroll(newsListRef, addEmployeesByPage)

    if(isLoading) return <Loader />
    
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
                        <Link to={`/${EmployeesData.id}`} className={styles.link}>
                            <tr>
                                <td>{EmployeesData.name}</td>
                                <td>{EmployeesData.position}</td>
                                <td>{EmployeesData.phone}</td>
                                <td>{EmployeesData.birthdate}</td>
                            </tr>
                        </Link>
                    )}
                </tbody>
            </table>
        </section>
    )
}

export default StaffList