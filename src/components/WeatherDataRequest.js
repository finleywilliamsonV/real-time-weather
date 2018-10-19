import React from 'react';
import PropTypes from 'prop-types';
import formatDateFns from 'date-fns/format';

/**
 * Accesses weather api's and saves data to state
 */
class WeatherDataRequest extends React.Component {
  static propTypes = {
    updateWeatherData: PropTypes.func.isRequired,
    mountFetching: PropTypes.func.isRequired,
    data: PropTypes.string,
  }

  componentDidMount() {
    this.props.mountFetching(false);

    this.fetchLatLong();
  }

  async fetchLatLong() {
    const data = encodeURIComponent(this.props.data);

    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${data}&key=501ef522ca0f4c06ae2b5410168d07eb`);
    const json = await response.json();

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
    console.log('Rendered', this);
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
