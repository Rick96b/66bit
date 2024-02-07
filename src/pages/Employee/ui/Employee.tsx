import { EmployeeCard, useEmployee } from 'entities/employee'
import { useParams } from 'react-router-dom'

const Employee = () => {
    const id = useParams().id
    const {employee, isLoading} = useEmployee(`https://frontend-test-api.stk8s.66bit.ru/api/Employee/${id}`)

    if(isLoading) return <></>

    if(employee) {
        return (
            <>
                <EmployeeCard employee={employee} />
            </>
        )
    }
    else return <></>
}

export default Employee