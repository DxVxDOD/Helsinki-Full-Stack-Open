import axios from 'axios';

const APIkey = import.meta.env.VITE_REACT_APP_API_KEY;


const geoCoding = async (cityName: string) => {
    const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${APIkey}`;

    const request = axios.get(geoUrl);
    const response = await request;
    const geoLotLan = {
        lon: response.data[0].lon,
        lat: response.data[0].lat
    }
    return geoLotLan; 
}

const news = async (cityName: string) => {
    const lon = (await geoCoding(cityName)).lon;
    const lat = (await geoCoding(cityName)).lat;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;
    
    const request = axios.get(weatherUrl);
    const response = await request;
    return response.data;
}

const weatherIcon = async (cityName: string) => {
    const weatherData = await news(cityName);
    const iconName = await weatherData.weather[0].icon
    const weatherIconUrl = `https://openweathermap.org/img/wn/${iconName}@2x.png`;

    const request = axios.get(weatherIconUrl);
    const response = await request
    return response.request.responseURL
}

export default {geoCoding, news, weatherIcon};