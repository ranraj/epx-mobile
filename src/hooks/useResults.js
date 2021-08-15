import { useEffect, useState } from 'react';
import epxService from '../api/EpxService';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {    
    try {
      const response = await epxService.get('/course', {
        params: {
          limit: 50,
          term: searchTerm,
          country: 'india'
        }
      });
      setResults(response.data);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };
  
  useEffect(() => {
    searchApi('popular');
  }, []);

  return [searchApi, results, errorMessage];
};
