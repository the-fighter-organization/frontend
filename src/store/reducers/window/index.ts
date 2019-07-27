import { WindowReducerTypes } from '../../types/window';

export interface WindowState {
    navbarTitle: string
}

const initialState: WindowState = {
    navbarTitle : 'Warrior'
}

export default (state = initialState, action): WindowState => {
    switch (action.type as WindowReducerTypes) {
        case "@window/navbarTitleChange":
            return { ...state, navbarTitle: action.payload }
        default:
            return state
    }
}