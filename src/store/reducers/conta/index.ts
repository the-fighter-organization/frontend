import { IUserModel } from '../../../models/Conta';
import { ContaReducerTypes } from '../../types/conta';

export interface ContaState {
    perfil?: IUserModel;
}

const initialState: ContaState = {
    perfil: null
}

export default (state = initialState, action):ContaState => {
    switch (action.type as ContaReducerTypes) {
        case "@conta/fetch":
            return {...state, perfil: action.payload}
        default:
            return state
    }
}