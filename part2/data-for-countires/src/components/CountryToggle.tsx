import {useState} from 'react'
import { countryType } from '../types/countryDetails.type'
import Country from './Country';

const CountryToggle = ({ country }: {country: countryType}) => {

    const [toggleShow, setToggleShow] = useState(false);

  return (
    <>
        <li>{country.name.common}</li>
        <button onClick={() => setToggleShow(!toggleShow)} >Show</button>
        {toggleShow ? <Country country={country} /> : ''}
    </>
  )
}

export default CountryToggle