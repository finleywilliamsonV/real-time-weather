import React from 'react';
import PropTypes from 'prop-types';

/**
 * Display for the 7-day forecast
 */
class ForecastDisplay extends React.PureComponent {
  static propTypes = {
    weatherData: PropTypes.object,
    locationFound: PropTypes.string,
  }
  /**
   * Renders the component
   * @return {String} html to be rendered
   */
  render() {
    console.log('\nRendered', this);
    return (
      <div>
        <h1>{this.props.locationFound}</h1>
        <h1>[1] [2] [3] [4] [5] [6] [7]</h1>
      </div>
    );
  }
}

export default ForecastDisplay;
