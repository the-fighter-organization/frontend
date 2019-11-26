import { ConfiguracaoReducerTypes } from '../../types/configuracoes';
import { IConfiguracao } from '../../../models/Configuracao';

export interface ConfiguracaoState {
    configuracoes?: IConfiguracao[];
    configuracaoEdit?: IConfiguracao;
}

const initialState: ConfiguracaoState = {
    configuracaoEdit: null,
    configuracoes: []
}

export default (state = initialState, action): ConfiguracaoState => {
    switch (action.type as ConfiguracaoReducerTypes) {
        case "@configuracoes/fetch":
            return { ...state, configuracoes: action.payload }

        case "@configuracoes/edit":
            return { ...state, configuracaoEdit: action.payload }

        default:
            return state
    }
}