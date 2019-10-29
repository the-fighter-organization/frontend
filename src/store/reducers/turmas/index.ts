import { ITurmaModel } from '../../../models/Turma'
import { TurmaReducerTypes } from '../../types/turmas'


export interface TurmaState {
    turmas?: ITurmaModel[];
    turmaEdit?: ITurmaModel;
}

const initialState: TurmaState = {
    turmaEdit: null,
    turmas: []
}

export default (state = initialState, action): TurmaState => {
    switch (action.type as TurmaReducerTypes) {
        case "@turmas/submit":
            return { ...state, turmaEdit: null }
        case "@turmas/fetch":
            return { ...state, turmas: action.payload }
        case "@turmas/edit":
            return { ...state, turmaEdit: action.payload }
        default:
            return state
    }
}