import { IUserModel } from '../../../models/Conta';

export default (values: IUserModel) => {
    let errors: any = {};

    if (!values.nome || !values.nome.trim()) {
        errors.nome = 'O nome é requerido!';
    }

    if (!values.sobrenome || !values.sobrenome.trim()) {
        errors.sobrenome = 'O sobrenome é requerido!';
    }

    return errors;
}