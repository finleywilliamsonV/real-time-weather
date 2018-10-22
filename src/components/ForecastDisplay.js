import React from 'react';
import PropTypes from 'prop-types';

import ForecastDay from './ForecastDay';

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
      <div>
        <h1>{locationFound}</h1>
        <div className='container'>
          <div className='row'>
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
