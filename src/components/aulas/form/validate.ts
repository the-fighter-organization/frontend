import { IAulaModel } from '../../../models/Turma';

export default (values: IAulaModel) => {
    let errors: any = {};

    if (!values.turma) {
        errors.turma = 'A turma é requerida!';
    }
    if (!values.dataAula || !values.dataAula.toString().trim()) {
        errors.dataAula = 'A data da aula é requerida!';
    }
    if (!values.planoAula || values.planoAula.length === 0) {
        errors.planoAula = 'O plano de aula é requerido!';
    }
    if (values._id && (!values.presencas || values.presencas.length === 0)) {
        errors.presencas = 'As presenças são requeridas!'
    }

    return errors;
}