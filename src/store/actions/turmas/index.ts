import { IAlunoModel } from "../../../models/Aluno";
import { FetchHandler } from "../../../config/fetch";
import history from "../../../config/history";
import { TURMAS_HOME_ROUTE } from '../../../components/route/turma';
import { TurmaReducerTypes } from '../../types/turmas';
import { ITurmaModel } from '../../../models/Turma';

const BASE_CONTROLLER = "turmas"

export function salvarTurma(payload: IAlunoModel) {
    return async dispatch => {
        debugger
        const http = new FetchHandler();
        const response = await http.post(BASE_CONTROLLER, payload)

        const body = await response.json();

        if (!response.ok) {
            throw new Error(`Ocorreu o seguinte erro: ${body ? body.toString() : null}`)
        }

        alert("Salvo com sucesso!")
        history.push(TURMAS_HOME_ROUTE)

        dispatch({
            type: "@turmas/submit" as TurmaReducerTypes
        })

    }
}

export function buscarTurmas(busca: ITurmaModel) {
    return async dispatch => {

        try {
            const http = new FetchHandler();
            const response = await http.post(`${BASE_CONTROLLER}/buscar`, { filters: busca || {}, select: "_id nome arteMarcial localTreino dataRegistro" });
            const body = await response.json();

            if (!response.ok) {
                alert(`Ocorreu o seguinte erro: ${body ? body.toString() : null}`)
            }

            dispatch({
                type: "@turmas/fetch" as TurmaReducerTypes,
                payload: body
            })
        }
        catch (e) {
            throw e;
        }
    }
}

export function getTurma(id: string) {
    return async dispatch => {

        try {
            const http = new FetchHandler();
            const response = await http.get(`${BASE_CONTROLLER}/${id}`);

            const body = await response.json();

            if (!response.ok) {
                alert(`Ocorreu o seguinte erro: ${body ? body.toString() : null}`)
            }

            dispatch({
                type: "@turmas/edit" as TurmaReducerTypes,
                payload: body
            })
        }
        catch (e) {
            throw e;
        }
    }
}

export function removerAluno(id: string) {
    return async dispatch => {

        try {
            const http = new FetchHandler();
            const response = await http.delete(`${BASE_CONTROLLER}/${id}`);

            const body = await response.json();

            if (!response.ok) {
                alert(`Ocorreu o seguinte erro: ${body ? body.toString() : null}`)
            }
        }
        catch (e) {
            throw e;
        }
    }
}