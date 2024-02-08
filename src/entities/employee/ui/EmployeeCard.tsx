import React from 'react'
import { Employee } from '../model/types'
import { Avatar, useMediaQuery } from '@mui/material'

import styles from './EmployeeCard.module.scss'
import classNames from 'classnames'
import { laptop } from 'shared/utils/breakpoints'

interface EmployeeCardProps {
    employee: Employee
}

const EmployeeCard:React.FC<EmployeeCardProps> = props => {
    const {
        employee
    } = props

    const isLaptop = useMediaQuery(`(min-width: ${laptop}px)`)

    return (
        <article className={classNames(styles.employeeCard, 'container')}>
            <div className={styles.employeeCardHeader}>
                <Avatar src={employee.photo} alt={employee.name} className={styles.avatar} />
                <div className={styles.employeePersonInfo}>
                    <p className={styles.name}>{employee.name}</p>
                    <p className={styles.position}>{employee.position}</p>
                    {isLaptop && 
                    <div className={styles.stack}>
                        {employee.stack.map(technology => 
                            <p className={styles.technology}>{technology}</p>
                        )}
                    </div>
                    }
                </div>
            </div>

            {!isLaptop && 
                <div className={styles.stack}>
                    {employee.stack.map((technology, index) => 
                        <p className={styles.technology} key={index}>{technology}</p>
                    )}
                </div>
            }

            {isLaptop && 
                <span className={styles.divider} />
            }

            <table className={styles.employeeMainInfo}>
                <thead>
                    <tr>
                        <td colSpan={2}>Основная информация</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.phone}>
                        <td>Контактный телефон:</td>
                        <td>{employee.phone}</td>
                    </tr>
                    <tr className={styles.birthdate}>
                        <td>Дата рождения:</td>
                        <td>{employee.birthdate}</td>
                    </tr>
                    <tr className={styles.dateOfEmployment}>
                        <td>Дата устройства:</td>
                        <td>{employee.dateOfEmployment}</td>
                    </tr>
                </tbody>
            </table>
        </article>
    )
}

export default EmployeeCard