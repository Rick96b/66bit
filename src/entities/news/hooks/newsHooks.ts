import { useState, useEffect } from 'react';
import axios from 'axios';
import { News } from '../model/types';

const useNewsApi = () => {
    const [news, setNews] = useState<News[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
  
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('your-api-endpoint');
        const data = await response.json();
        setNews(data);
        setError('');
      } catch (error) {
        setError('Failed to fetch news');
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchNews();
    }, []);
  
    const reloadNews = () => {
      fetchNews();
    };
  
    return { news, isLoading, error, reloadNews };
  };