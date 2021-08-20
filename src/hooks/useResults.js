import { useEffect, useState } from 'react';
import epxService from '../api/EpxService';

const EPX_API_KEY= "<EPX_API_KEY>";
export default (loggedIn, userInfo, authToken) => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {

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
    console.log(loggedIn);
    if (loggedIn) {
      searchApi('');
    }
  }, []);

  return [searchApi, results, errorMessage];
};
