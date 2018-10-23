import React from 'react';
import PropTypes from 'prop-types';

import './AddressInput.css';


class AddressInput extends React.PureComponent {
  static propTypes = {
    address: PropTypes.string,
    fetchLocation: PropTypes.func,
    setAddressValue: PropTypes.func,
  }

  onClick = (e) => {
    this.props.fetchLocation();
  }

  onChange = ({ target: t }) => {
    if (t.value.length >= 1) {
      this.props.setAddressValue(t.value);
    }
  }

  render() {
    console.log('\nRendered', this);
    return (
      <div id='address-input-div' className='input-group'>
        <input id='address-input' placeholder='Search address, city, etc...' className='form-control' onChange={this.onChange}></input>
        <button id='address-submit-btn' className='btn' onClick={this.onClick}>Go</button>
      </div>);
  }
}

export default AddressInput;
