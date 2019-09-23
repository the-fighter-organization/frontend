import { IAlunoModel } from './Aluno';

export interface ITurmaModel {
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