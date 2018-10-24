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

    const response = await fetch(`/api/lat-long/${address}`);
    const json = await response.json();

    // check if any viable results, if not, set moundAddressError = true
    if (json.results.length === 0) {
      this.props.updateWeatherData(null);
      this.props.setMountAddressError(true);
      return;
    }

    // store found location in state
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
    const response = await fetch(`/api/weather/${lat},${lng}`);

    const json = await response.json();
    const results = (json.daily && json.daily.data) && json.daily.data;

    const normalizedData = results.reduce((acc, curr) => {
      const time = convertTimeStamp(curr.time);

      acc[ time ] = {
        time: time,
        icon: curr.icon.replace(/(-day)|(-night)/, ''),
        temperatureHigh: curr.temperatureHigh,
        temperatureLow: curr.temperatureLow,
      };

      return acc;
    }, {});

    return this.props.updateWeatherData(normalizedData);
  }

  render() {
    return null;
  }
}

function convertTimeStamp(timeStamp) {
  return formatDateFns(new Date(timeStamp * 1000), 'MM/DD/YYYY');
}

export default WeatherDataRequest;
