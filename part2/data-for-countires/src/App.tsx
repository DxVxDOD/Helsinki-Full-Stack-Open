import { useEffect, useState } from 'react';
import countryService from './services/countries';

function App() {

  const [searchResult, setSearchResult] = useState<string>('Fi');
  const [countries, setCountries] = useState(['']);

  useEffect(() => {

    if (searchResult !== '' || undefined) {
      countryService
      .searchCountry(searchResult)
      .then((response) => setCountries(response))
    } else alert('Please enter a valid value')

  }, [searchResult])

  return (
    <>
    find counries: <input type="text" placeholder='Example: Fi' onChange={(e) => setSearchResult(e.target.value)} />
    {
      countries.length > 10 ?
      <p>There are too many mateches, please specify!</p> :
      countries.map((counrty) =>  <p key={counrty} >{counrty}</p> )
    }
    </>
  )
}

export default App
