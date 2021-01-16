import React from 'react';
import '../App.css';

class SetButton extends React.Component {
  render() {
    const {click, text} = this.props;
    return(
      <button onClick={click}>{text}</button>
    )
  }
}

export default SetButton