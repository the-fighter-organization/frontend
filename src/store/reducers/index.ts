import {combineReducers} from 'redux';
import alunoReducer, { AlunoState } from './alunos'
import { reducer as formReducer } from 'redux-form'

export interface ApplicationState{
  aluno:AlunoState
}

const rootReducer = combineReducers({
  aluno: alunoReducer,
  form: formReducer
})

export default rootReducer;