import axios from 'axios';

const baseNameUrl = 'https://restcountries.com/v3.1/name/'

const searchCountry = async (name: string) => {
    const request =  axios.get(`${baseNameUrl}/${name}`);
    const response = (await request).data;
    const countries =  response.map((country) => country.name.common);
    return countries;
}

export default {searchCountry}