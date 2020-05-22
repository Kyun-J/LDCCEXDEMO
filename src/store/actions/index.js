import * as types from './ActionTypes';

export function compoenentPosition(position) {
    return {
        type: types.COMPONENT_POSITION,
        position: position
    }
}