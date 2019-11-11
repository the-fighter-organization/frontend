import { FetchHandler } from '../../../config/fetch';
import history from '../../../config/history';
import { IConfiguracao } from '../../../models/Configuracao';
import { ConfiguracaoReducerTypes } from '../../types/configuracoes';
import { CONFIGURACOES_HOME_ROUTE } from '../../../components/route/configuracoes';

export function salvarConfiguracao(payload: IConfiguracao) {
    return async dispatch => {

        const http = new FetchHandler();
        const response = await http.post('configuracoes', payload)

        const body = await response.json();

        if (!response.ok) {
            await FetchHandler.tratarBodyResponse(response, body);
            return;
        }

        alert("Salvo com sucesso!")
        history.push(CONFIGURACOES_HOME_ROUTE)

        dispatch({
            type: "@configuracoes/submit" as ConfiguracaoReducerTypes
        })

    }
}

export function getConfiguracao() {
    return async dispatch => {

        try {
            debugger
            const http = new FetchHandler();
            const response = await http.get(`configuracoes`);

            const body = await response.json();

            if (!response.ok) {
                await FetchHandler.tratarBodyResponse(response, body);
                return;
            }

            dispatch({
                type: "@configuracoes/edit" as ConfiguracaoReducerTypes,
                payload: body
            })
        }
        catch (e) {
            throw e;
        }
    }
}