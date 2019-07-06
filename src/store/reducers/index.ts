import {combineReducers} from 'redux';
import alunoReducer from './alunos'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  aluno: alunoReducer,
  form: formReducer
})

export default rootReducer;