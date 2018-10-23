import React from 'react';

import './Title.css';

/**
 * App title
 */
class Title extends React.PureComponent {
  /**
   * Renders the component
   * @return {String} html to be rendered
   */
  render() {
    console.log('\nRendered', this);
    return (
      <div id='heading-div'>
        <h1 id='main-heading-txt' className='m-0'>Real-Time Weather</h1>
        <p id='sub-heading-txt'>Made with React and Parcel</p>
      </div>
    );
  }
}

export default Title;
