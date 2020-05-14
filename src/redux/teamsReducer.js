const teamsReducer = (state = {teams:{home:{score:0,substitutions:3},away: {score:0,substitutions:3}}}, action) => {
    switch (action.type) {
        case 'INCREMENT_HOME_SCORE':
            return {
                teams: {
                    home: {
                        score: state.teams.home.score + 1,
                        substitutions: state.teams.home.substitutions
                    }, away: {
                        score: state.teams.away.score,
                        substitutions: state.teams.away.substitutions
                    }
                }
            }
        case 'DECREMENT_HOME_SCORE':
            return (state.teams.home.score>1 ? {teams: {home: {score: state.teams.home.score - 1, substitutions: state.teams.home.substitutions}, away: {score:state.teams.away.score,substitutions:state.teams.away.substitutions}}}: {teams: {home: {score:0,substitutions:state.teams.home.substitutions}, away:{score:state.teams.away.score, substitutions:state.teams.away.substitutions}}})
        case 'RESET_HOME_SCORE':
            return {
                teams: {
                    home: {
                        score: 0,
                        substitutions: state.teams.home.substitutions
                    }, away: {
                        score: state.teams.away.score,
                        substitutions: state.teams.away.substitutions
                    }
                }
            }
        case 'INCREMENT_AWAY_SCORE':
            return {
                teams: {
                    home: {
                        score: state.teams.home.score,
                        substitutions: state.teams.home.substitutions
                    }, away: {
                        score: state.teams.away.score + 1,
                        substitutions: state.teams.away.substitutions
                    }
                }
            }
        case 'DECREMENT_AWAY_SCORE':
            return (state.teams.away.score > 1 ? { teams: { home: { score: state.teams.home.score, substitutions: state.teams.home.substitutions }, away: { score: state.teams.away.score - 1, substitutions: state.teams.away.substitutions } } } : { teams: { home: { score: state.teams.home.score, substitutions: state.teams.home.substitutions }, away: { score:0, substitutions: state.teams.away.substitutions}}})
        case 'RESET_AWAY_SCORE':
            return {
                teams: {
                    home: {
                        score: state.teams.home.score,
                        substitutions: state.teams.home.substitutions
                    }, away: {
                        score: 0,
                        substitutions: state.teams.away.substitutions
                    }
                }
            }
        case 'INCREMENT_HOME_SUBSTITUTIONS':
            return (state.teams.home.substitutions < 3 ? { teams: { home: { score: state.teams.home.score, substitutions: state.teams.home.substitutions + 1 }, away: { score: state.teams.away.score, substitutions: state.teams.away.substitutions } } } : { teams: { home: { score: state.teams.home.score, substitutions: 3 }, away: { score: state.teams.away.score, substitutions: state.teams.away.substitutions}}})
        case 'DECREMENT_HOME_SUBSTITUTIONS':
            return (state.teams.home.substitutions > 0 ? { teams: { home: { score: state.teams.home.score, substitutions: state.teams.home.substitutions - 1 }, away: { score: state.teams.away.score, substitutions: state.teams.away.substitutions } } } : { teams: { home: { score: state.teams.home.score, substitutions: 0 }, away: { score: state.teams.away.score, substitutions: state.teams.away.substitutions}}})
        case 'RESET_HOME_SUBSTITUTIONS':
            return {
                teams: {
                    home: {
                        score: state.teams.home.score,
                        substitutions: 3
                    }, away: {
                        score: state.teams.away.score,
                        substitutions: state.teams.away.substitutions
                    }
                }
            }
        case 'INCREMENT_AWAY_SUBSTITUTIONS':
            return (state.teams.away.substitutions < 3 ? { teams: { home: { score: state.teams.home.score, substitutions: state.teams.home.substitutions }, away: { score: state.teams.away.score, substitutions: state.teams.away.substitutions + 1} } } : { teams: { home: { score: state.teams.home.score, substitutions: state.teams.home.substitutions }, away: { score: state.teams.away.score, substitutions: 3 } } })
        case 'DECREMENT_AWAY_SUBSTITUTIONS':
            return (state.teams.away.substitutions > 0 ? { teams: { home: { score: state.teams.home.score, substitutions: state.teams.home.substitutions }, away: { score: state.teams.away.score, substitutions: state.teams.away.substitutions - 1 } } } : { teams: { home: { score: state.teams.home.score, substitutions: state.teams.home.substitutions }, away: { score: state.teams.away.score, substitutions: 0 } } })
        case 'RESET_AWAY_SUBSTITUTIONS':
            return {
                teams: {
                    home: {
                        score: state.teams.home.score,
                        substitutions: state.teams.home.substitutions
                    }, away: {
                        score: state.teams.away.score,
                        substitutions: 3
                    }
                }
            }
        default:
            return state;
    }
}

export default teamsReducer;