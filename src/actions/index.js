import axios from 'axios';

const API_KEY = '75ab6f486ed14e6386babf6e8050156f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,

    // request is a promise,
    // will be caught by ReduxPromise
    // and send the result of the promise
    // to the reducers
    payload: request
  };
};
