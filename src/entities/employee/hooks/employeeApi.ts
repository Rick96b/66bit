import { useState, useEffect } from 'react';
import axios from 'axios';
import { Employee } from '../model/types';

interface useEmployeeApiProps {
  url: string,
  name?: string,
  gender?: 'Male' | 'Female',
  position?: 'Frontend' | 'Backend' | 'Analyst' | 'Manager' | 'Designer',
  stack?: 'CSharp' | 'React' | 'Java' | 'PHP' | 'Figma' | 'Word'
}

export const useEmployeeApi = (props:useEmployeeApiProps) => {
  const {
    url,
    name,
    gender,
    position,
    stack
  } = props

  const [page, setPage] = useState(1)
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchEmployees = async (pageId: number) => {
    try {
      setIsLoading(true);
      const response = await axios.get<Employee[]>(url, {
        params: {
          page: pageId,
          name: name,
          gender: gender,
          position: position,
          stack: stack
        }
      });
      setEmployees((previousList) => [...previousList, ...response.data]);
      setError('');
    } catch (error) {
      console.log(error)
      setError('Failed to fetch employees');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees(page);
  }, []);

  const reloadEmployees = () => {
    setPage(1)
    setEmployees([])
    fetchEmployees(page);
  };

  const addEmployeesByPage = () => {
    console.log('what')
    setPage(page + 1)
    fetchEmployees(page + 1);
  }

  return { employees, isLoading, error, reloadEmployees, addEmployeesByPage };
};