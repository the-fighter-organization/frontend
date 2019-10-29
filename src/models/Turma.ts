import { IAlunoModel } from './Aluno';

export interface ITurmaModel {
  alunos: IAlunoModel[];
  _id: string;
  nome: string;
  arteMarcial: string;
  localTreino: string;
  colaboradores: string[];
  aulas: IAulaModel[];
  // Administrativo
  dataRegistro: Date;
  inativo: boolean;
}

export interface IAulaModel {
  turmaId: string;
  turma: ITurmaModel;
  _id: string;
  dataRegistro: Date;
  dataAula: Date;
  dataChamada: Date;
  presencas: IAulaPresencaModel[];
  planoAula: string[];
}

export interface IAulaPresencaModel {
  aluno: string;
  presente: boolean;
  observacoesPositivas: string[];
  observacoesNegativas: string[];
  nota: number;
}