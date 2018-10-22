import React from 'react';
import PropTypes from 'prop-types';
import getDayFns from 'date-fns/get_day';

class ForecastDay extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    console.log('Forecast Data', this.props.data);
    return (
      <div className='col'>
        <div className='card'>
          <div className='card-text text-center'>
            <p>{
              this.props.data.icon.replace(/-/g, ' ')
            }</p>
            <p>{this.props.data.time}</p>
            <div className='container'>
              <div className='row'>
                <div className='col-6 text-left'>
                  {Number.parseInt(this.props.data.temperatureLow)}
                </div>
                <div className='col-6 text-right'>
                  {Number.parseInt(this.props.data.temperatureHigh)}
                </div>
              </div>
            </div>
          </div>
          <div id="day-of-week-txt" className="text-center">
            <h3>
              {convertWeekNumberToString(getDayFns(this.props.data.time))}
            </h3>
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

export default ForecastDay;

