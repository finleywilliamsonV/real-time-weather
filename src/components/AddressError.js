import React from 'react';

class AddressError extends React.Component {
  render() {
    return (
      <div
        id='invalid-address-alert'
        className="alert alert-danger"
        role="alert"
      >
        Invalid address! Please try again.
      </div>
    );
  }
}

export default AddressError;
