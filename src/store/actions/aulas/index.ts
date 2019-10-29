import { AULAS_HOME_ROUTE } from '../../../components/route/aula';
import { FetchHandler } from '../../../config/fetch';
import history from '../../../config/history';
import { IAulaModel } from '../../../models/Turma';
import { AulaReducerTypes } from '../../types/aulas';

const BASE_CONTROLLER = "aulas"

export function salvarAula(payload: IAulaModel) {
    return async dispatch => {
        const { turma, turmaId, ...objRequest } = payload;
        const http = new FetchHandler();
        const response = await http.post(`${BASE_CONTROLLER}/${turmaId}`, objRequest)

        const body = await response.json();

        if (!response.ok) {
            alert(`Ocorreu o seguinte erro: ${body ? body.message : null}`)
            return;
        }

        alert("Salvo com sucesso!")
        history.push(AULAS_HOME_ROUTE)

        dispatch({
            type: "@aulas/submit" as AulaReducerTypes
        })
    }
}

export function buscarAulas(busca: IAulaModel) {
    return async dispatch => {

        try {
            const http = new FetchHandler();
            // const response = await http.post(`${BASE_CONTROLLER}/buscar`, { filters: busca || {}, select: "_id nome arteMarcial localTreino dataRegistro" });
            const response = await http.get(`${BASE_CONTROLLER}`);
            const body = await response.json();

            if (!response.ok) {
                alert(`Ocorreu o seguinte erro: ${body ? body.message : null}`)
            }

            dispatch({
                type: "@aulas/fetch" as AulaReducerTypes,
                payload: body
            })
        }
        catch (e) {
            throw e;
        }
    }
}

export function getAula(turmaId: string, id: string) {
    return async dispatch => {

        try {
            const http = new FetchHandler();
            const response = await http.get(`${BASE_CONTROLLER}/${turmaId}/${id}`);

            const body = await response.json();

            if (!response.ok) {
                alert(`Ocorreu o seguinte erro: ${body ? body.message : null}`)
            }

            dispatch({
                type: "@aulas/edit" as AulaReducerTypes,
                payload: body
            })
        }
        catch (e) {
            throw e;
        }
    }
}

export function removerAula(turmaId: string, id: string) {
    return async dispatch => {

        try {
            const http = new FetchHandler();
            const response = await http.delete(`${BASE_CONTROLLER}/${turmaId}/${id}`);

            const body = await response.json();

            if (!response.ok) {
                alert(`Ocorreu o seguinte erro: ${body ? body.message : null}`)
            }
        }
        catch (e) {
            throw e;
        }
    }
}