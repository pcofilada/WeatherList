import axios from 'axios';

const API_KEY = '44db6a862fba0b067b1930da0d769e98'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ph`; 
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
