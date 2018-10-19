import React from 'react';
import PropTypes from 'prop-types';
import 'regenerator-runtime/runtime';
import 'isomorphic-fetch';

import Title from '../../components/Title';
import AddressInput from '../../components/AddressInput';
import ForecastDisplay from '../../components/ForecastDisplay';
// import AddressError from '../../components/AddressError';
import WeatherDataRequest from '../../components/WeatherDataRequest';

import './App.css';

class App extends React.Component {
  state = {
    address: null,
    mountFetching: false,
    mountAddressError: false,
    weatherData: undefined,
    renderTest: 0,
  };

  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  setAddressValue = (add) => {
    this.setState({ address: add });
  }

  updateWeatherData = (newData) => {
    this.setState({ weatherData: newData });
    console.log(this.state.weatherData);
  }

  fetchLocation = () => {
    const { address } = this.state;

    if (address.length >= 4) {
      this.setState({ mountFetching: true });
    }
  }

  mountFetching = bool => {
    this.setState({ mountFetching: bool });
  }

  mountAddressError = bool => {

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
                <ForecastDisplay weatherData={this.state.weatherData}/>
                : null
            }
          </div>
        </div>

        {/* Rerender Button */}
        <div>
          <button id='rerender-btn'
            onClick={() => {
              console.log('\n...rerendering\n');
              this.setState({ renderTest: this.state.renderTest + 1 });
            }}
          > Rerender</button>
        </div>

        {/* Get Weather Data From Api */}
        {
          mountFetching ?
            <WeatherDataRequest
              updateWeatherData={this.updateWeatherData}
              data={address}
              mountFetching={this.mountFetching}
            />
            : null
        }

      </div>
    );
  }
}

export default App;
