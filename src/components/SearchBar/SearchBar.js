import React from 'react';
import PropTypes from 'prop-types';

import AddressInput from '../AddressInput/AddressInput';
import Title from '../Title/Title';

import './SearchBar.css';

class SearchBar extends React.Component {
  static propTypes = {
    setAddressValue: PropTypes.func.isRequired,
    fetchLocation: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div id='search-bar-div' className='container-fluid'>
        <div id='search-bar-row' className="row d-flex align-items-center">
          <div id='title-col' className="col-12 col-md-6">
            <Title />
          </div>
          <div id='address-input-col' className="col-12 col-md-6">
            <AddressInput
              setAddressValue={this.props.setAddressValue}
              fetchLocation={this.props.fetchLocation}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
