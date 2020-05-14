import React from 'react'
import { connect } from 'react-redux'
import { incrementHomeSubstitutions, decrementHomeSubstitutions, incrementAwaySubstitutions, decrementAwaySubstitutions } from '../redux/teamsActions'


const Substitutions = ({dispatch, home, away}) => (
    <div className="subs">
        <div>
            <p>Subs:</p>
            <div className="sub-section">
                <div className="sub-buttons">
                    <button className="top-left-button" disabled={home.substitutions > 2} onClick={() => dispatch(incrementHomeSubstitutions())}>+</button>
                    <button className="bottom-left-button" disabled={home.substitutions < 1} onClick={() => dispatch(decrementHomeSubstitutions())}>-</button>
                </div>
                <div className="sub-dots">
                    {Array(home.substitutions).fill(<div className="dot"></div>)}
                </div>
            </div>
        </div>

        <div>
            <p>Subs:</p>
            <div className="sub-section">
                <div className="sub-buttons">
                    <button className="top-left-button" disabled={away.substitutions > 2} onClick={() => dispatch(incrementAwaySubstitutions())}>+</button>
                    <button className="bottom-left-button" disabled={away.substitutions < 1} onClick={() => dispatch(decrementAwaySubstitutions())}>-</button>
                </div>
                <div className="sub-dots">
                    {Array(away.substitutions).fill(<div className="dot"></div>)}
                </div>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return({
        home: {
            substitutions: state.teamsReducer.teams.home.substitutions
        },
        away: {
            substitutions: state.teamsReducer.teams.away.substitutions
        }
    })
};

export default connect(mapStateToProps)(Substitutions);