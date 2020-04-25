const ISLOGED = 'isLoged'

const initGlobalState = {
    isLoged: false
}

export const GlobalAction = {
    isLoged: (value) => ({ type: ISLOGED, value: value })
}

export default (state = initGlobalState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
    case ISLOGED: {
        newState.isLoged = action.value
        return newState
    }

    default:
        return state
    }
}
