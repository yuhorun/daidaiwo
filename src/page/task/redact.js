const ISOPEN = 'isOpen'

const initState = {
    isOpen: 'auto'
}

export const action = {
    isOpen: (value) => ({ type: ISOPEN, value: value })
}

export default (state = initState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
    case ISOPEN: {
        newState.isOpen = action.value
        return newState
    }

    default:
        return state
    }
}
