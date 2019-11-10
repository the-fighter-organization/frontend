import { IConfiguracao } from '../../../models/Configuracao';

export default (values: IConfiguracao) => {
    let errors: any = {};

    if (!values.valorMensalidade) {
        errors.valorMensalidade = 'O valor da mensalidade é requerido!';
    }
    if (!values.diaVencimentoMensalidade) {
        errors.dataVencimentoMensalidade = 'o dia de vencimento da mensalidade é requerido!';
    }

    return errors;
}