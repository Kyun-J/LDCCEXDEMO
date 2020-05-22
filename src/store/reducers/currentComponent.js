import * as types from '../actions/ActionTypes'

const init = {
    position : 0
}

export default function info(state = init, action) {
    if(action.type == types.COMPONENT_POSITION) {
        return {
        ...state,
        position: action.position
        }
    } else {
        return state;
    }
}