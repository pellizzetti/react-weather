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
  forecastContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  dailyContainer: {
    margin: 25,
  },
  weatherImage: {
    height: 130,
  },
  weatherDateHeader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100,
  },
  detailContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  detailDescription: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  },
};

module.exports = styles;
