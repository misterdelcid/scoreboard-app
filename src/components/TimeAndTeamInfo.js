import React, { Component } from 'react'
import { connect } from 'react-redux'
 
class TimeAndTeamInfo extends Component {
    render() {
        const {timerTime} = this.props
        const seconds = Math.floor((timerTime / 10) % 60) < 10 ? '0' + (Math.floor((timerTime / 10) % 60)) : Math.floor((timerTime / 10) % 60)
        const minutes = Math.floor(timerTime / 600) < 10 ? '0' + (Math.floor(timerTime / 600)) : Math.floor(timerTime / 600)

        return(
            <div>
                <div className="team-names">
                    <h2>Home</h2>
                    <h2>Away</h2>
                </div>
                <div className="time-pictures">
                    <div className="home-picture">
                    </div>
                    <div className="time">
                        <p>{`${minutes}:${seconds}`}</p>
                    </div>
                    <div className="away-picture">
                    </div>
                </div>
            </div>
        )}
};

const mapStateToProps = ({timeReducer}) => ({
    timerTime: timeReducer.time.timerTime
});

export default connect(mapStateToProps)(TimeAndTeamInfo);