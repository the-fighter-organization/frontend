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
        errors.responsaveis = { _error: 'Responsável: \nPelo menos um responsável deve ser informado!' }
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
    errors.endereco._error = 'Endereço:';
    if (!values.endereco || !values.endereco.logradouro) {
        errors.endereco.logradouro = 'O logradouro é obrigatório!'
        errors.endereco._error += '\n' + errors.endereco.logradouro
    }
    if (!values.endereco || !values.endereco.numero) {
        errors.endereco.numero = 'O número é obrigatório!'
        errors.endereco._error += '\n' + errors.endereco.numero
    }
    if (!values.endereco || !values.endereco.bairro) {
        errors.endereco.bairro = 'O bairro é obrigatório!'
        errors.endereco._error += '\n' + errors.endereco.bairro
    }
    if (!values.endereco || !values.endereco.cidade) {
        errors.endereco.cidade = 'A cidade é obrigatória!'
        errors.endereco._error += '\n' + errors.endereco.cidade
    }
    if (!values.endereco || !values.endereco.cep) {
        errors.endereco.cep = 'O CEP é obrigatório!'
        errors.endereco._error += '\n' + errors.endereco.cep
    }
    if (!values.endereco || !values.endereco.uf) {
        errors.endereco.uf = 'A UF é obrigatória!'
        errors.endereco._error += '\n' + errors.endereco.uf
    }

    // caso tenha só a _error e mais nada
    if (Object.keys(errors.endereco).length === 1) {
        errors.endereco._error = undefined
    }

    // Responsáveis
    if (values.mensalidades && values.mensalidades.length) {
        values.mensalidades.forEach((item, index) => {
            let mensalidadeErrors: any = {};

            if (!item || !item.data) {
                mensalidadeErrors.data = 'A data é requerida!'
            }
            if (!item || !item.situacao) {
                mensalidadeErrors.situacao = 'A situação é requerida!'
            }

            if (!errors.mensalidades) {
                errors.mensalidades = []
            }
            errors.mensalidades[index] = mensalidadeErrors;
        })
    }
    return errors;
}