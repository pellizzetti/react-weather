import axios from 'axios';

const API_KEY = 'd858fae81053b6dcbadc643e7e9c41a0';

function get(location, query) {
  return axios.get(`http://api.openweathermap.org/data/2.5/${location}?q=${query}&units=metric&APPID=${API_KEY}`);
}

const daysMap = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

const monthsMap = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'Aug',
  8: 'Sept',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
};

const openWeatherApiHelper = {

  getCityForecast(city) {
    return get('forecast/daily', city)
      .catch(err => console.warn('Error in getCityForecast: ', err));
  },

  convertUnixToDate(unixTimestmap) {
    const date = new Date(unixTimestmap * 1000);
    const day = daysMap[date.getDay()];
    const month = `${monthsMap[date.getMonth()]} ${date.getDate()}`;
    return `${day}, ${month}`;
  },

};

export default openWeatherApiHelper;
