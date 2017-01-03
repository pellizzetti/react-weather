import axios from 'axios';

const API_KEY = 'd858fae81053b6dcbadc643e7e9c41a0';

function get(location, query) {
  return axios.get(`http://api.openweathermap.org/data/2.5/${location}?q=${query}&type=accurate&APPID=${API_KEY}`);
}

function getTotalStars(repos) {
  return repos.data.reduce((prev, current) => prev + current.stargazers_count, 0);
}

function getPlayersData(player) {
  return get('users', `${player.login}/repos`)
    .then(getTotalStars)
    .then(totalStars => ({
      followers: player.followers,
      totalStars,
    }));
}

function calculateScores(players) {
  return [
    (players[0].followers * 3) + players[0].totalStars,
    (players[1].followers * 3) + players[1].totalStars,
  ];
}

const openWeatherApiHelper = {

  getCityWeather(city) {
    return get('weather', city)
      .then(weather => console.log(weather.data))
      .catch(err => console.warn('Error in getCityWeather: ', err));
  },

  getCityForcast(city) {
    return get('forecast/daily', city)
      .then(forecast => console.log(forecast.data))
      .catch(err => console.warn('Error in getCityForcast: ', err));
  },

  battle(players) {
    const playerOneData = getPlayersData(players[0]);
    const playerTwoData = getPlayersData(players[1]);
    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(err => console.warn('Error in battle function: ', err));
  },

};

export default openWeatherApiHelper;
