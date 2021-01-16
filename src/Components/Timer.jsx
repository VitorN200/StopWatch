import React from 'react';
import '../App.css';

class Timer extends React.Component {
  render() {
    const {minutes, seconds, alert} = this.props;
    return (
      <section className="stopwatch">
        <span>{(minutes >= 10) ? minutes : "0" + minutes}</span>&nbsp;:&nbsp;
        <span>{(seconds >= 10) ? seconds : "0" + seconds}</span><br />
        <p className="alert" style={{ color: alert }}>Fim da pausa, bora codar!</p>
      </section>
    )
  }
}

export default Timer