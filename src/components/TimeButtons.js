import React, { Component } from 'react'
import { connect } from 'react-redux'
import { stopTime, resetTime, tick } from '../redux/timeActions'


class TimeButtons extends Component {

    render() {
        const {dispatch, time} = this.props
        const {timerTime, isRunning, timerId} = time

        const startTimer = () => {
            const timerId = setInterval(() => dispatch(tick()), 100);
            dispatch({ type: 'START_TIME', timerId });
        }

        const stopTimer = () => {
            clearInterval(timerId);
            dispatch(stopTime());
        }

        return (
            <div className="time-buttons">
                {!isRunning && <button className="start-button" onClick={startTimer}>{timerTime < 1 ? 'Start Clock' : 'Resume'}</button>}
                {isRunning && <button className="stop-button" onClick={stopTimer}>Stop</button>}
                {(timerTime > 1 && isRunning === false) && <button className="reset-button" onClick={() => dispatch(resetTime())}>Reset</button>}
            </div>
        )}
};

const mapStateToProps = ({timeReducer}) => ({
    time: {
        timerTime: timeReducer.time.timerTime,
        isRunning: timeReducer.time.isRunning,
        timerId: timeReducer.time.timerId
    }
})

export default connect(mapStateToProps)(TimeButtons);