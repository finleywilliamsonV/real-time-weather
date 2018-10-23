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
  if (weekNumber === 0 || weekNumber === '0') {
    return 'SUN';
  } else if (weekNumber === 1 || weekNumber === '1') {
    return 'MON';
  } else if (weekNumber === 2 || weekNumber === '2') {
    return 'TUE';
  } else if (weekNumber === 3 || weekNumber === '3') {
    return 'WED';
  } else if (weekNumber === 4 || weekNumber === '4') {
    return 'THU';
  } else if (weekNumber === 5 || weekNumber === '5') {
    return 'FRI';
  } else if (weekNumber === 6 || weekNumber === '6') {
    return 'SAT';
  } else {
    return 'SHI';
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

