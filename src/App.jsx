import React from 'react';
import icaroStand from './Images/icaro-parado.gif';
import icaroRide from './Images/icaro.gif';
import Ride from './Components/Ride';
import Timer from './Components/Timer';
import SetButton from './Components/SetButton';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      countM: 0,
      countS: 0,
      style: 500,
      image: icaroStand,
      alert: '#1B2431'
    }
  }

  startClick = () => {
    this.setTime();
    const run = this.runningBike();
    this.myInterval = setInterval(() => {
      if (this.state.countM === 0 && this.state.countS === 0) {
        this.setState({
          countS: 0,
          countM: 0,
          image: icaroStand,
          alert: '#FFA62B'
        });
        this.stopClick();
        return;
      }
      if (this.state.countS === 0) {
        this.setState((prevState, _props) => ({
          countS: 60,
          countM: prevState.countM - 1
        }))
      };
      this.setState((prevState, _props) => ({
        countS: prevState.countS - 1,
        style: prevState.style - run
      }))
    }, 1000);
  }

  stopClick = () => {
    clearInterval(this.myInterval);
    this.setState({
      image: icaroStand
    })
  }

  setTime = () => {
    this.setState({
      countM: parseInt(this.minuteInput.value),
      countS: parseInt(this.secondInput.value),
      image: icaroRide,
      alert: '#1B2431'
    })
    if (this.minuteInput.value === '') {
      this.setState({
        countM: 0,
      })
    }
    if (this.secondInput.value === '') {
      this.setState({
        countS: 0,
      })
    }
  }

  runningBike = () => {
    this.setState({
      style: 500,
    })
    const seconds1 = this.minuteInput.value === '' ? 0 : (this.minuteInput.value * 60);
    const seconds2 = this.secondInput.value === '' ? 0 : parseInt(this.secondInput.value);
    const result = Math.floor((500 / (seconds1 + seconds2)), -1)
    return result;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Ride image ={this.state.image} style={this.state.style} />
          <p>Ícaro`s Ride Timer ⌚</p>
          <Timer minutes={this.state.countM} seconds={this.state.countS} alert={this.state.alert}/>
          <section className="setTimer">
            <div className="timer">
              <p>Quanto tempo de pausa?</p>
              <input type="number" min="0" max="59" placeholder="mm" ref={(input) => this.minuteInput = input}></input>&nbsp;:&nbsp;
              <input type="number" min="0" max="59" placeholder="ss" ref={(input) => this.secondInput = input}></input>
            </div>
            <div className="timerButtons">
              <SetButton click={this.startClick} text={"Iniciar"}/>
              <SetButton click={this.stopClick} text={"Parar"}/>
            </div>
          </section>
        </header>
      </div>
    );
  }

}

export default App;
