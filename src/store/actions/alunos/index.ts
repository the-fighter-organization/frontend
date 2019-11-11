import { IAlunoModel } from "../../../models/Aluno";
import { FetchHandler } from "../../../config/fetch";
import { AlunoReducerTypes } from "../../types/alunos";
import history from "../../../config/history";
import { ALUNOS_HOME_ROUTE } from "../../../components/route/alunos";
import { IBuscaParameters } from '../../../models/busca';

export function salvarAluno(payload: IAlunoModel) {
    return async dispatch => {

        const http = new FetchHandler();
        const response = await http.post('alunos', payload)

        const body = await response.json();

        if (!response.ok) {
            await FetchHandler.tratarBodyResponse(response, body);
            return;
        }

        alert("Salvo com sucesso!")
        history.push(ALUNOS_HOME_ROUTE)

        dispatch({
            type: "@alunos/submit" as AlunoReducerTypes
        })

    }
}

export function buscarAlunos(busca: IBuscaParameters) {
    return async dispatch => {
        try {
            if (!busca || !busca.select) {
                busca = { ...busca, select: '_id nome cpf dataRegistro' }
            }

            const http = new FetchHandler();
            const response = await http.post('alunos/buscar', busca);

            const body = await response.json();

            if (!response.ok) {
                await FetchHandler.tratarBodyResponse(response, body);
                return;
            }

            dispatch({
                type: "@alunos/fetch" as AlunoReducerTypes,
                payload: body
            })
        }
        catch (e) {
            throw e;
        }
    }
}

export function getAluno(id: string) {
    return async dispatch => {

        try {
            const http = new FetchHandler();
            const response = await http.get(`alunos/${id}`);

            const body = await response.json();

            if (!response.ok) {
                await FetchHandler.tratarBodyResponse(response, body);
                return;
            }

            dispatch({
                type: "@alunos/edit" as AlunoReducerTypes,
                payload: body
            })
        }
        catch (e) {
            throw e;
        }
    }
}

export function getAlunosComMensalidadesVencidas() {
    return async dispatch => {
        const http = new FetchHandler();
        const response = await http.get("alunos/buscar-mensalidades-vencidas");

        const body = await response.json();

        if (!response.ok) {
            await FetchHandler.tratarBodyResponse(response, body);
            return;
        }

        dispatch({
            type: "@alunos/fetch-mensalidades-vencidas" as AlunoReducerTypes,
            payload: body
        })
    }
}


export function removerAluno(id: string) {
    return async dispatch => {
        try {
            const http = new FetchHandler();
            const response = await http.delete(`alunos/${id}`);

            const body = await response.json();

            if (!response.ok) {
                await FetchHandler.tratarBodyResponse(response, body);
                return;
            }
        }
        catch (e) {
            throw e;
        }
    }
}