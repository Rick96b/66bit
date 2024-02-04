import { useState, useEffect } from 'react';
import axios from 'axios';
import { News } from '../model/types';

export const useNewsApi = (url: string) => {
    const [page, setPage] = useState(1)
    const [news, setNews] = useState<News[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
  
    const fetchNews = async (pageId: number) => {
      try {
        setIsLoading(true);
        const response = await axios.get<News[]>(url, {params: {page: pageId}});
        setNews((previousList) => [...previousList, ...response.data]);
        setError('');
      } catch (error) {
        console.log(error)
        setError('Failed to fetch news');
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchNews(page);
    }, []);
  
    const reloadNews = () => {
      setPage(1)
      setNews([])
      fetchNews(page);
    };

    const addNewsByPage = () => {
      console.log('what')
      setPage(page + 1)
      fetchNews(page + 1);
    }
  
    return { news, isLoading, error, reloadNews, addNewsByPage };
  };