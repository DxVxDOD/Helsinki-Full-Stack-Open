import { useEffect, useState } from 'react'
import { countryType } from '../types/countryDetails.type'
import weather from '../services/weather'

type weatherDetailT = {
    wind: number,
    temp: number
}

const Country = ({country}: {country: countryType }) => {
    const [weatherDetails, setWeatherDetails] = useState<weatherDetailT>()
    const [weatherIcon, setWeatherIcon] = useState('');

    const language =  Object.values(country.languages)

    useEffect(() => {
        weather
        .news(country.capital)
        .then((response) => setWeatherDetails({wind: response.wind.speed, temp: response.main.temp}));

        weather
        .weatherIcon(country.capital)
        .then((response) => setWeatherIcon(response))
    }, [country.capital])

        return(
            <>
                <h2>{country.name.common}</h2>
                <p>Capital: {country.capital}</p>
                <p>Area: {country.area}</p>
                <b>Language(s):</b>
                <ul>
                    {language.map((language) => <li key={Math.floor(Math.random() * 10000)} >{language}</li>)}
                </ul>
                <img src={country.flags.png} />
                <h2>Weather in {country.capital}</h2>
                <p>The tempreture is : {weatherDetails ? Math.floor(weatherDetails.temp - 273.15) : 0}</p>
                <img src={weatherIcon} />
                <p>The wind is {weatherDetails ? weatherDetails.wind : 0}m/s fast</p>
            </>
        )
}

export default Country;