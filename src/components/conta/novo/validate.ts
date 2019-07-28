import { IUserModel } from '../../../models/Conta';

export default (values: IUserModel) => {
    let errors: any = {};

    if (!values.nome || !values.nome.trim()) {
        errors.nome = 'O nome é requerido!';
    }

    if (!values.sobrenome || !values.sobrenome.trim()) {
        errors.sobrenome = 'O sobrenome é requerido!';
    }

    if (!values.email || !values.email.trim()) {
        errors.email = 'O e-mail é requerido!';
    }

    if (!values.senha || !values.senha.trim()) {
        errors.senha = 'A senha é requerida!';
    }

    if (!values.confirmacaoSenha || !values.confirmacaoSenha.trim()) {
        errors.confirmacaoSenha = 'A confirmação de senha é requerida!';
    }else{
        if(values.senha !== values.confirmacaoSenha){
            errors.confirmacaoSenha = 'A confirmação de senha deve ser igual a senha'
        }
    }
    
    return errors;
}