import React from 'react';
import '../App.css';

class Ride extends React.Component {
  render() {
    const {image, style} = this.props;
    return (
      <section className="bike">
        <img src={image} alt="bike" className="icaro" style={{ right: `${style}px` }} />
      </section>
    )
  }
}

export default Ride