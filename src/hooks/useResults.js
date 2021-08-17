import { useEffect, useState } from 'react';
import epxService from '../api/EpxService';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    console.log(searchTerm);    
    try {
      const response = await epxService.get('/course/search', {
        params: {          
          page:0, 
          size: 5,
          title: searchTerm
        }
      });
      console.log(response.data.courses.length)
      setResults(response.data.courses);      
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };
  
  useEffect(() => {
    searchApi('');
  }, []);

  return [searchApi, results, errorMessage];
};
