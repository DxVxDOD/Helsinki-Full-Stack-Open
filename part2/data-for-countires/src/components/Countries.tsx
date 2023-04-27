import { countryType } from '../types/countryDetails.type'
import Country from './Country';
import CountryToggle from './CountryToggle';

const Countries = ({countries}: {countries: countryType[]}) => {

    if(countries.length === 1) {
        return(
            <>
                {countries.map((country) => <Country key={country.name.common} country={country}/>)}
            </>
        )
    }
    return(
    <ul>
        {countries.map((country: countryType) => <CountryToggle key={country.name.common} country={country} />)}
    </ul>
    )
}

export default Countries;