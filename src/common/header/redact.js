const SCROLL = 'scroll'

const initState = {
    isScrolled: false
}

export const action = {
    scroll: (value) => ({ type: SCROLL, value: value })
}

export default (state = initState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
    case SCROLL: {
        newState.isScrolled = action.value
        return newState
    }

    default:
        return state
    }
}
