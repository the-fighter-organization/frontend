import { IAlunoModel } from './Aluno';

export interface ITurmaModel {
  dataRegistro: Date;
  _id: string;
  arteMarcial: string;
  localTreino: string;
  colaboradores: string[];
  aulas: IAulaModel[];
  // Administrativo
  inativo: boolean;
}

export interface IAulaModel {
  dataRegistro: Date;
  dataAula: Date;
  dataChamada: Date;
  presencas: IAulaPresencaModel[];
}

export interface IAulaPresencaModel {
  aluno: IAlunoModel
  observacoesPositivas: string[];
  observacoesNegativas: string[];
  nota: number;
}