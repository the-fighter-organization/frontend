import { IAlunoModel } from "../../../models/Aluno";
import { FetchHandler } from "../../../config/fetch";
import { AlunoReducerTypes } from "../../types/alunos";

export function inserirAluno(payload: IAlunoModel){
    return async dispatch => {
        debugger
        const http = new FetchHandler();
        const response = await http.post('alunos', payload)

        const body = await response.json();
        
        if(!response.ok){
            alert(`Ocorreu o seguinte erro: ${body ? body.toString() : null}`)
        }
        else{
            alert("Salvo com sucesso!")
        }

        dispatch({
            type: "@alunos/submit" as AlunoReducerTypes
        })
    }
}

export function buscarAlunos(busca: IAlunoModel){
    return async dispatch => {
        debugger;
        try{const http = new FetchHandler();
        const response = await http.post('alunos/buscar', busca || {});
        
        const body = await response.json();

        if(!response.ok){
            alert(`Ocorreu o seguinte erro: ${body ? body.toString() : null}`)
        }

        dispatch({
            type: "@alunos/fetch" as AlunoReducerTypes,
            payload: body
        })}
        catch(e){
            throw e;
        }
    }
}