// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card">
          <div className="timer-text-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-img"
            />
            <p className="timer-text">Timer</p>
          </div>
          <h1 className="timer">{time}</h1>
          <div>
            <button
              className="button-1"
              type="button"
              onClick={this.onStartTimer}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              className="button-2"
              type="button"
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              className="button-3"
              type="button"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
