import {combineReducers} from 'redux';
import alunoReducer, { AlunoState } from './alunos'
import { reducer as formReducer } from 'redux-form'
import contaReducer, { ContaState } from './conta';
import windowReducer, { WindowState } from './window';

export interface ApplicationState{
  aluno:AlunoState,
  conta: ContaState,
  window: WindowState
}

const rootReducer = combineReducers({
  window: windowReducer,
  aluno: alunoReducer,
  conta: contaReducer,
  form: formReducer
})

export default rootReducer;