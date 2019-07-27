import { FetchHandler } from "../../../config/fetch";
import { ContaReducerTypes } from "../../types/conta";
import { IUserModel } from "../../../models/Conta";
import { CONTA_CONFIRMACAO_SENHA_ROUTE } from "../../../components/route/conta";

export function getPerfilUsuario(payload?:any) {
    return async dispatch => {
        debugger
        try {
            const http = new FetchHandler();
            const response = await http.get(`usuarios/current-user`);

            const body = await response.json();

            if (!response.ok) {
                alert(`Ocorreu o seguinte erro: ${body ? body.toString() : null}`)
            }

            dispatch({
                type: "@conta/fetch" as ContaReducerTypes,
                payload: body
            })
        }
        catch (e) {
            throw e;
        }
    }
}

export function editarPerfil(payload: IUserModel) {
    return async dispatch => {
        
        try {
            const http = new FetchHandler();
            const response = await http.post(`usuarios/editar-perfil`, payload);

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

export function editarSenha(payload: any) {
    return async dispatch => {
        
        try {
            const http = new FetchHandler();
            http.authorized = false;
            payload.linkConfirmacao = `${window.location.protocol}//${window.location.host}${CONTA_CONFIRMACAO_SENHA_ROUTE}`;
            const response = await http.post(`usuarios/editar-senha`, payload);

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

export function novaConta(payload: any) {
    return async dispatch => {
        
        try {
            const http = new FetchHandler();
            http.authorized = false;            
            payload.linkConfirmacao = `${window.location.protocol}//${window.location.host}${CONTA_CONFIRMACAO_SENHA_ROUTE}`;
            const response = await http.post(`usuarios/novo`, payload);

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

export function confirmarPerfil({ id, codigoConfirmacao }) {
    return async dispatch => {        
        try {
            debugger
            const http = new FetchHandler();
            http.authorized = false;            
            const response = await http.get(`usuarios/confirmar-perfil/${id}/${codigoConfirmacao}`);

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