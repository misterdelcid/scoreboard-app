import React from 'react'
import { connect } from 'react-redux'
import { incrementHomeScore, decrementHomeScore, incrementAwayScore, decrementAwayScore } from '../redux/teamsActions'

const Score = ({dispatch, home, away}) => (
    <div className="score">
        <div className="score-buttons">
            <button className="top-left-button" onClick={() => dispatch(incrementHomeScore())}>+</button>
            <button className="bottom-left-button" disabled={home.score < 1} onClick={() => dispatch(decrementHomeScore())}>-</button>
        </div>
        <p>{`${home.score}:${away.score}`}</p>
        <div className="score-buttons">
            <button className="top-right-button" onClick={() => dispatch(incrementAwayScore())}>+</button>
            <button className="bottom-right-button" disabled={away.score < 1} onClick={() => dispatch(decrementAwayScore())}>-</button>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return({
        home: {
            score: state.teamsReducer.teams.home.score,
        },
        away: {
            score: state.teamsReducer.teams.away.score,
        }
    })
};

export default connect(mapStateToProps)(Score);