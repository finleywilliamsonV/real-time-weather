import React from 'react';
import PropTypes from 'prop-types';
import getDayFns from 'date-fns/get_day';

import './ForecastDay.css';

class ForecastDay extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    console.log('Forecast Data', this.props.data);
    return (
      <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl'>
        <div className='card'>
          <div className='card-text text-center'>
            <h3>
              {convertWeekNumberToString(getDayFns(this.props.data.time))}
            </h3>
            <p>{this.props.data.time}</p>
            <i className={'icon-' + this.props.data.icon}></i>
            <div id="icon-text">
              <p>{convertIconStringToDisplayString(this.props.data.icon)}</p>
            </div>
            <div className='container'>
              <div className='row' id='high-low-text'>
                <div className='col-6 text-left' id='temp-high-text'>
                  {Number.parseInt(this.props.data.temperatureHigh)}
                </div>
                <div className='col-6 text-right' id='temp-low-text'>
                  {Number.parseInt(this.props.data.temperatureLow)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function convertWeekNumberToString(weekNumber) {
  switch (weekNumber) {
  case 0: return 'SUN';
  case 1: return 'MON';
  case 2: return 'TUES';
  case 3: return 'WED';
  case 4: return 'THU';
  case 5: return 'FRI';
  case 6: return 'SAT';
  }
}

function convertIconStringToDisplayString(iconString) {
  switch (iconString) {
  case 'clear': return 'Clear';
  case 'rain': return 'Rain';
  case 'snow': return 'Snow';
  case 'sleet': return 'Sleet';
  case 'wind': return 'Wind';
  case 'fog': return 'Fog';
  case 'cloudy': return 'Cloudy';
  case 'partly-cloudy': return 'Partly Cloudy';
  }
}

export default ForecastDay;

