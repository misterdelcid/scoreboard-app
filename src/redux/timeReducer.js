const timeReducer = (state={time:{timerTime:0, timerStart:0, isRunning: false}}, action) => {
    switch (action.type) {
        case 'START_TIME':
            return {
                time: {
                    timerTime: state.time.timerTime,
                    timerStart: Date.now() - state.time.timerTime, 
                    isRunning: true,
                    timerId: action.timerId
                }
            }
        case 'STOP_TIME':
            return {
                time: {
                    timerTime: state.time.timerTime,
                    timerStart: 0,
                    isRunning: false,
                    timerId: state.time.timerId
                }
            }
        case 'RESET_TIME':
            return {
                time: {
                    timerTime: 0,
                    timerStart: 0,
                    isRunning: false,
                }
            }
        case 'TICK':
            return {
                time: {
                    timerTime: state.time.timerTime + 1,
                    timerStart: state.time.timerStart,
                    isRunning: state.time.isRunning,
                    timerId: state.time.timerId
                }
            }
        default:
            return state
    }
}

export default timeReducer;