import React from 'react';
import PropTypes from 'prop-types';

import ForecastDay from '../ForecastDay/ForecastDay';
import './ForecastDisplay.css';

/**
 * Display for the 7-day forecast
 */
class ForecastDisplay extends React.PureComponent {
  static propTypes = {
    weatherData: PropTypes.object.isRequired,
    locationFound: PropTypes.string.isRequired,
  }
  /**
   * Renders the component
   * @return {String} html to be rendered
   */
  render() {
    console.log('\nRendered', this);
    const { weatherData, locationFound } = this.props;
    return (
      <div id='forecast-outer-container' className='container-fluid p-0'>
        <div id='forecast-container' className='container'>
          <div id='forecast-row' className='row'>
            <div className="col-12">
              <h3 id='location-found-txt'>{locationFound}</h3>
            </div>
            {
              Object.keys(weatherData).map((key, index) => {
                if (index > 6) {
                  return;
                } else {
                  return (<ForecastDay key={key} data={weatherData[ key ]}/>);
                }
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ForecastDisplay;
