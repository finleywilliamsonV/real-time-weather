import React from 'react';
import PropTypes from 'prop-types';
import 'regenerator-runtime/runtime';
import 'isomorphic-fetch';

import ForecastDisplay from '../../components/ForecastDisplay/ForecastDisplay';
import AddressError from '../../components/AddressError';
import WeatherDataRequest from '../../components/WeatherDataRequest';
import SearchBar from '../../components/SearchBar/SearchBar';

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
  }

  updateWeatherData = (newData) => {
    this.setState({ weatherData: newData });
  }

  fetchLocation = () => {
    this.setState({ mountFetching: true });
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

        {/* Search Bar Row */}
        <div className='row'>
          <div className='col p-0'>
            <SearchBar
              setAddressValue={this.setAddressValue}
              fetchLocation={this.fetchLocation}
            />
          </div>
        </div>

        {/* Forecast Row */}
        <div id='forecast-row' className='row'>
          <div id='forecast-col' className='col'>
            {
              this.state.weatherData ?
                <ForecastDisplay
                  locationFound={this.state.locationFound}
                  weatherData={this.state.weatherData}
                />

                : this.state.mountAddressError ?
                  <AddressError/>
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
