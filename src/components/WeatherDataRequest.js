import React from 'react';
import PropTypes from 'prop-types';
import formatDateFns from 'date-fns/format';

/**
 * Accesses weather api's and saves data to state
 */
class WeatherDataRequest extends React.Component {
  static propTypes = {
    address: PropTypes.string,
    setMountFetching: PropTypes.func.isRequired,
    setLocationFound: PropTypes.func.isRequired,
    setMountAddressError: PropTypes.func.isRequired,
    updateWeatherData: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.setMountFetching(false);
    this.props.setMountAddressError(false);

    this.fetchLatLong();
  }

  async fetchLatLong() {
    const address = encodeURIComponent(this.props.address);

    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${address}&key=501ef522ca0f4c06ae2b5410168d07eb`);
    const json = await response.json();

    // CHECK IF ANY VIABLE RESULTS
    console.log('latLong data', json);
    if (json.results.length === 0) {
      this.props.updateWeatherData(null);
      this.props.setMountAddressError(true);
      console.log('FAILED');
      return;
    }

    // STORE FOUND LOCATION IN STATE
    const locationFound = json.results[ 0 ].formatted;
    this.props.setLocationFound(locationFound);

    // extract geometry and pass into fetchWeatherData()
    const results = (json.results && json.results[ 0 ]) && json.results[ 0 ];
    const geometry =
      (results.geometry && results.geometry.lat && results.geometry.lng)
      && results.geometry;

    return this.fetchWeatherData(geometry);
  }

  async fetchWeatherData({ lat, lng }) {
    const response =
      await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/27fa7afbec463b30b5c6c636974e6ba7/${lat},${lng}`);

    const json = await response.json();
    console.log('weather data', json);
    const results = (json.daily && json.daily.data) && json.daily.data;

    const normalizedData = results.reduce((acc, curr) => {
      const time = convertTimeStamp(curr.time);

      acc[ time ] = {
        time: time,
        icon: curr.icon,
        temperatureHigh: curr.temperatureHigh,
        temperatureLow: curr.temperatureLow,
      };

      return acc;
    }, {});

    return this.props.updateWeatherData(normalizedData);
  }

  render() {
    console.log('\nRendered', this);
    return null;
  }
}

function convertTimeStamp(timeStamp) {
  return formatDateFns(new Date(timeStamp * 1000), 'MM/DD/YYYY');
}

// function parseAddress(address) {
//   const parsedAddress = address.split(', ');
//   console.log(parsedAddress);
// }

export default WeatherDataRequest;
