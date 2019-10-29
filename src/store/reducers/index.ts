import { combineReducers } from 'redux';
import alunoReducer, { AlunoState } from './alunos'
import { reducer as formReducer } from 'redux-form'
import contaReducer, { ContaState } from './conta';
import windowReducer, { WindowState } from './window';
import turmaReducer, { TurmaState } from './turmas';
import aulaReducer, { AulaState } from './aulas';

export interface ApplicationState {
  aula: AulaState;
  aluno: AlunoState,
  turma: TurmaState,
  conta: ContaState,
  window: WindowState
}

const rootReducer = combineReducers({
  aula: aulaReducer,
  window: windowReducer,
  aluno: alunoReducer,
  turma: turmaReducer,
  conta: contaReducer,
  form: formReducer
})

export default rootReducer;