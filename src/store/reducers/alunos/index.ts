import { AlunoActionTypes } from '../../types/alunos';
import { IAlunoModel } from '../../../models/Aluno';

export interface AlunoState {
    alunos: IAlunoModel[];
    alunoEdit?: IAlunoModel;
}

const initialState: AlunoState = {
    alunoEdit: null,
    alunos: []
}

export default (state = initialState, action) => {
    switch (action.type as AlunoActionTypes) {
        default:
            return state
    }
}