import { IAlunoModel } from '../../../models/Aluno';

export default (values: any) => {
    let errors: any = {};

    if (!values.email || !values.email.trim()) {
        errors.nome = 'O e-mail é requerido!';
    }

    if (!values.senha || !values.senha.trim()) {
        errors.senha = 'A senha é requerida!';
    }

    return errors;
}