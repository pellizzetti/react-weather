const styles = {
  appContainer: {
    width: '100%',
    height: '92%',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(60, 19, 98, 0.93)',
    color: '#fff',
    padding: 5,
  },
  headerTitle: {
    fontFamily: 'Lato',
    fontSize: 33,
    margin: 0,
  },
  homeContainer: {
    backgroundSize: 'cover',
    backgroundImage: "url('/images/background.jpg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  homePromptTitle: {
    fontFamily: 'Lato',
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
  },
  dailyContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35,
  },
  dailyWeather: {
    height: 130,
  },
  dailyHeader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100,
  },
};

module.exports = styles;
