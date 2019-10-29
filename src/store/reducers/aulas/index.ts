import { AulaReducerTypes } from '../../types/aulas'
import { IAulaModel } from '../../../models/Turma'


export interface AulaState {
    aulas?: IAulaModel[];
    aulaEdit?: IAulaModel;
}

const initialState: AulaState = {
    aulaEdit: null,
    aulas: []
}

export default (state = initialState, action): AulaState => {
    switch (action.type as AulaReducerTypes) {
        case "@aulas/submit":
            return { ...state, aulaEdit: null }
        case "@aulas/fetch":
            return { ...state, aulas: action.payload }
        case "@aulas/edit":
            return { ...state, aulaEdit: action.payload }
        default:
            return state
    }
}