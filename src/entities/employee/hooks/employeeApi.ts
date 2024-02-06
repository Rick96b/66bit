import { useState, useEffect } from 'react';
import axios from 'axios';
import { Employee, Gender, Position, Stack } from '../model/types';
import { genderList, positions } from '../model/enums';

interface useEmployeeApiProps {
  url: string,
  filters?: {
    name?: string,
    gender?: Gender,
    position?: Position,
    stack?: Stack
  }
}

export const useEmployeeApi = (props:useEmployeeApiProps) => {
  const {
    url,
    filters
  } = props

  const [page, setPage] = useState(1)
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchEmployees = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get<Employee[]>(url, {
        params: {
          page: page,
          name: filters?.name,
          gender: filters?.gender ? genderList[filters?.gender] : '',
          position: filters?.position ? positions[filters?.position] : '',
          stack: filters?.stack 
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
    setEmployees([])
    setPage(1)
  }, [filters]);

  useEffect(() => {
    fetchEmployees();
  }, [page]);

  const addEmployeesByPage = () => {
    setPage((prevPage) => prevPage + 1)
  }

  return { employees, isLoading, error, addEmployeesByPage };
};