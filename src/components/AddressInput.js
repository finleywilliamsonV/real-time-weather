import React from 'react';
import PropTypes from 'prop-types';


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
      <h1>Enter Address:
        <input onChange={this.onChange}></input>
        <button onClick={this.onClick}>GO</button>
      </h1>);
  }
}

export default AddressInput;
