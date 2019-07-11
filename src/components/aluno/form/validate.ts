import { IAlunoModel } from '../../../models/Aluno';

export default (values: IAlunoModel) => {
    let errors: any = {};

    if (!values.nome || !values.nome.trim()) {
        errors.nome = 'O nome é requerido!';
    }
    if (!values.dataNascimento) {
        errors.dataNascimento = 'A data de nascimento é requerida!';
    }
    if (!values.cpf || !values.cpf.trim()) {
        errors.cpf = 'O CPF é requerido!';
    }
    if (!values.rg || !values.rg.trim()) {
        errors.rg = 'O RG é requerido!';
    }
    if (values.sexo === undefined) {
        errors.sexo = 'O sexo é requerido!';
    }
    if (!values.nacionalidade) {
        errors.nacionalidade = 'A nacionalidade é requerida!';
    }
    // Responsáveis
    if (!values.responsaveis || !values.responsaveis.length) {
        errors.responsaveis = { _error: 'Pelo menos um responsável deve ser informado!' }
    } else {
        values.responsaveis.forEach((item, index) => {
            let responsavelErrors: any = {};

            if (!item || !item.nome) {
                responsavelErrors.nome = 'O nome é requerido!'
            }
            if (!item || !item.cpf) {
                responsavelErrors.cpf = 'O CPF é requerido!'
            }
            if (!item || !item.rg) {
                responsavelErrors.rg = 'O RG é requerido!'
            }
            if (!item || !item.telefone) {
                responsavelErrors.telefone = 'O telefone é requerido!'
            }
            if (!item || !item.nivelParentesco) {
                responsavelErrors.nivelParentesco = 'O parentesco é requerido!'
            }

            if (!errors.responsaveis) {
                errors.responsaveis = []
            }
            errors.responsaveis[index] = responsavelErrors;
        })
    }
    // Endereço
    errors.endereco = {};
    if(!values.endereco || !values.endereco.logradouro){
        errors.endereco.logradouro = 'O logradouro é obrigatório!'
    }
    if(!values.endereco || !values.endereco.numero){
        errors.endereco.numero = 'O número é obrigatório!'
    }
    if(!values.endereco || !values.endereco.bairro){
        errors.endereco.bairro = 'O bairro é obrigatório!'
    }
    if(!values.endereco || !values.endereco.cidade){
        errors.endereco.cidade = 'A cidade é obrigatória!'
    }
    if(!values.endereco || !values.endereco.cep){
        errors.endereco.cep = 'O CEP é obrigatório!'
    }
    if(!values.endereco || !values.endereco.uf){
        errors.endereco.uf = 'A UF é obrigatória!'
    }

    return errors;
}