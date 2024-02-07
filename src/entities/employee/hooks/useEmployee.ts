import React, { useEffect, useState } from 'react'
import { Employee } from '../model/types';
import axios from 'axios';

export const useEmployee = (url: string) => {
    const [employee, setEmployee] = useState<Employee>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
  
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
              setIsLoading(true);
              const response = await axios.get<Employee>(url);
              setEmployee(response.data);
              setError('');
            } catch (error) {
              console.log(error)
              setError('Failed to fetch employees');
            } finally {
              setIsLoading(false);
            }
        };

        fetchEmployees()
    }, []);
  
  
    return { employee, isLoading, error };
};
