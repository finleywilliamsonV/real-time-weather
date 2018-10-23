import React from 'react';
import PropTypes from 'prop-types';
import getDayFns from 'date-fns/get_day';

import './ForecastDay.css';

class ForecastDay extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className='col-xs-12 col-sm-4 col-md-3 col-lg col-xl forecast-col'>
        <div className='container-fluid weather-card text-center'>

          <div className="row d-flex align-items-center forecast-day-row m-0">

            <div className="col col-sm-12 weekday-col">
              <div className='weekday-txt'>
                {convertWeekNumberToString(getDayFns(this.props.data.time))}
              </div>
              <div className='date-txt'>{this.props.data.time}</div>
            </div>

            <div className="col col-sm-12 icon-col">
              <i className={'icon-' + this.props.data.icon + ' icon-img'}></i>
              <div className="icon-txt-div">
                <div className='icon-txt'>
                  {convertIconStringToDisplayString(this.props.data.icon)}
                </div>
              </div>
            </div>

            <div className="col col-sm-12 temp-col">
              <div className='high-low-div'>
                <span className='temp-high-txt'>
                  {Number.parseInt(this.props.data.temperatureHigh)}
                </span>
                <span className='temp-low-txt'>
                  <span className='slash-txt'> / </span>
                  {Number.parseInt(this.props.data.temperatureLow)}
                </span>
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
  case 2: return 'TUE';
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

