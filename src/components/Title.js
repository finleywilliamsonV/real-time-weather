import React from 'react';

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
    return (<h1>Real-Time Weather</h1>);
  }
}

export default Title;
