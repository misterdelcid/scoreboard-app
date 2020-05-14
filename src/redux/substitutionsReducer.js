const homeSubstitutionsReducer = (state = {substitutions:3}, action) => {
    switch (action.type) {
        case 'INCREMENT_SUBSTITUTIONS':
            return (state.substitutions < 3 ? {substitutions: state.substitutions + 1}: {substitutions: 3})
        case 'DECREMENT_SUBSTITUTIONS':
            return (state.substitutions > 0 ? {substitutions: state.substitutions - 1}: {substitutions: 0})
        case 'RESET_SUBSTITUTIONS':
            return {
                substitutions: 3
            }
        default:
            return state;
    }
}

export default homeSubstitutionsReducer;