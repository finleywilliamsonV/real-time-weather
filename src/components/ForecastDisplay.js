import React from 'react';
import PropTypes from 'prop-types';

/**
 * Display for the 7-day forecast
 */
class ForecastDisplay extends React.PureComponent {
  static propTypes = {
    weatherData: PropTypes.object,
  }
  /**
   * Renders the component
   * @return {String} html to be rendered
   */
  render() {
    console.log('Rendered', this);
    return (<h1>[1] [2] [3] [4] [5] [6] [7]</h1>);
  }
}

export default ForecastDisplay;
