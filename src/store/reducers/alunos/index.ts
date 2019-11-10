import { AlunoReducerTypes } from '../../types/alunos';
import { IAlunoModel } from '../../../models/Aluno';

export interface AlunoState {
    alunos?: IAlunoModel[];
    alunosMensalidadesVencidas?: IAlunoModel[];
    alunoEdit?: IAlunoModel;
}

const initialState: AlunoState = {
    alunoEdit: null,
    alunos: [],
    alunosMensalidadesVencidas: []
}

export default (state = initialState, action): AlunoState => {
    switch (action.type as AlunoReducerTypes) {
        case "@alunos/submit":
            return { ...state, alunoEdit: null }
        case "@alunos/fetch":
            return { ...state, alunos: action.payload }
        case "@alunos/fetch-mensalidades-vencidas":
            return { ...state, alunosMensalidadesVencidas: action.payload }
        case "@alunos/edit":
            return { ...state, alunoEdit: action.payload }
        default:
            return state
    }
}