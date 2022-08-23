import {createStore} from "redux"

const initialState = {
    user: 'not defined',
    isModel: false
}

function handleState (state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
    }
}

const store = createStore(handleState)

export default store