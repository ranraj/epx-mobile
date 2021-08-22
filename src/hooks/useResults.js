import { useEffect, useState } from 'react';
import epxService from '../api/EpxService';

const EPX_API_KEY= "";
export default (key,loggedIn, userInfo, authToken) => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    console.log('search')
    try {
      const response = await epxService.get('/course/search', {
        params: {
          page: 0,
          size: 5,
          title: searchTerm
        },
        headers: {
          "authKey": EPX_API_KEY
        }
      });
      setResults(response.data.courses);
    } catch (err) {
      console.log("search api", err);
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {    
    if(!key){
      searchApi(key);  
    }
  }, []);

  return [searchApi, results, errorMessage];
};
