import React from 'react';
import PropTypes from 'prop-types';
import 'regenerator-runtime/runtime';
import 'isomorphic-fetch';

import Title from '../../components/Title';
import AddressInput from '../../components/AddressInput';
import ForecastDisplay from '../../components/ForecastDisplay';
import AddressError from '../../components/AddressError';
import WeatherDataRequest from '../../components/WeatherDataRequest';

import './App.css';

class App extends React.Component {
  state = {
    address: null,
    locationFound: null,
    mountFetching: false,
    mountAddressError: false,
    weatherData: undefined,
  };

  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  setAddressValue = (add) => {
    this.setState({ address: add });
    this.setState({ mountAddressError: false });
  }

  setLocationFound = locationFound => {
    this.setState({ locationFound });
    console.log('SET STATE - LOCATION FOUND:', this.state.locationFound);
  }

  updateWeatherData = (newData) => {
    this.setState({ weatherData: newData });
    console.log('SET STATE - WEATHER DATA SET:', this.state.weatherData);
  }

  fetchLocation = () => {
    const { address } = this.state;

    if (address.length >= 4) {
      this.setState({ mountFetching: true });
    }
  }

  setMountFetching = bool => {
    this.setState({ mountFetching: bool });
  }

  setMountAddressError = bool => {
    this.setState({ mountAddressError: bool });
  }

  /**
   * Renders the component
   * @return {String} html to be rendered
   */
  render() {
    const { mountFetching, address } = this.state;

    return (
      <div id='appContainer' className='container-fluid'>

        {/* Title Row */}
        <div className='row'>
          <div className='col'>
            <Title />
          </div>
        </div>

        {/* Zipcode Input Row */}
        <div className='row'>
          <div className='col'>
            <AddressInput
              setAddressValue={this.setAddressValue}
              fetchLocation={this.fetchLocation}
            />
          </div>
        </div>

        {/* Forecast Row */}
        <div className='row'>
          <div className='col'>
            {
              this.state.weatherData ?
                <ForecastDisplay
                  locationFound={this.state.locationFound}
                  weatherData={this.state.weatherData}
                />

                : this.state.mountAddressError ?
                  <AddressError />
                  : null
            }
          </div>
        </div>

        {/* Get Weather Data From Api */}
        {
          mountFetching ?
            <WeatherDataRequest
              address={address}
              setMountFetching={this.setMountFetching}
              setLocationFound={this.setLocationFound}
              setMountAddressError={this.setMountAddressError}
              updateWeatherData={this.updateWeatherData}
            />
            : null
        }

      </div>
    );
  }
}

export default App;
