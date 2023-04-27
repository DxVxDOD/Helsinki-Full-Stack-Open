import { useEffect, useState } from 'react';
import countryService from './services/countries';
import Countries from './components/Countries';

function App() {

  const [searchResult, setSearchResult] = useState('Fi');
  const [countries, setCountries] = useState([]);

  useEffect(() => {

    if (searchResult !== '' || undefined) {
      countryService
      .searchCountry(searchResult)
      .then((response) => setCountries(response));
    } else alert('Please enter a valid value')
  }, [searchResult])

  return (
    <>
    find counries: <input type="text" placeholder='Example: Fi' onChange={(e) => setSearchResult(e.target.value)} />
    {
      countries.length > 10 ?
      <p>There are too many mateches, please specify!</p> :
      <Countries countries={countries} />
    }
    </>
  )
}

export default App
