import { ITurmaModel } from '../../../models/Turma';

export default (values: ITurmaModel) => {
    let errors: any = {};

    if (!values.nome || !values.nome.trim()) {
        errors.nome = 'O nome é requerido!';
    }
    if (!values.arteMarcial || !values.arteMarcial.trim()) {
        errors.cpf = 'A arte marcial é requerida!';
    }
    if (!values.localTreino || !values.localTreino.trim()) {
        errors.cpf = 'O local de treino é requerido!';
    }
    if (values.inativo === undefined || values === null) {
        errors.inativo = 'É preciso definir se está inativa ou não'
    }
    // Responsáveis
    if (!values.colaboradores || !values.colaboradores.length) {
        errors.colaboradores = { error: 'Colaboradores: \nPelo menos um colaborador deve ser informado!' }
    } else {
        values.colaboradores.forEach((item, index) => {
            let colaboradorErrors: string = null;

            if (!item) {
                colaboradorErrors = 'O colaborador é requerido!'
            }

            if (!errors.colaboradores) {
                errors.colaboradores = []
            }
            errors.colaboradores[index] = colaboradorErrors;
        })
    }

    return errors;
}