import { AlunoReducerTypes } from '../../types/alunos';
import { IAlunoModel } from '../../../models/Aluno';

export interface AlunoState {
    alunos?: IAlunoModel[];
    alunoEdit?: IAlunoModel;
}

const initialState: AlunoState = {
    alunoEdit: null,
    alunos: []
}

export default (state = initialState, action):AlunoState => {
    switch (action.type as AlunoReducerTypes) {
        case "@alunos/submit":
            return {...state, alunoEdit : null}
        case "@alunos/fetch":
            debugger
            return {...state, alunos : action.payload}
        default:
            return state
    }
}