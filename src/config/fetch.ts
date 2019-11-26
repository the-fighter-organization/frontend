import CookieManager from "./cookie";
import history from "./history";
import { EOL } from 'os';

export class FetchHandler {

    public authorized: boolean = true;
    public baseURL: string = '';
    public headers: Headers = new Headers();

    constructor() {
        this.configBaseURL();
    }

    configBaseURL() {
        if (process.env.NODE_ENV === 'development') {
            this.baseURL = "http://localhost:3001";
            // this.baseURL = "http://warrior-backend.appspot.com"
        }
        else {
            this.baseURL = "http://warrior-backend.appspot.com"
        }
    }
    private getRequestAtual(url: string, method: string, body?: any): Request {
        if (this.authorized && !this.headers.get("Authorization")) {
            this.headers.append("Authorization", CookieManager.get("Authorization"));
        }
        if (!this.headers.get("Content-Type")) {
            this.headers.append("Content-Type", 'application/json');
        }

        const headers = this.headers;

        return new Request(`${this.baseURL}/${url}`, {
            method,
            body: JSON.stringify(body),
            headers
        })
    }

    public async post(url: string, body?: any): Promise<Response> {
        let response = await fetch(this.getRequestAtual(url, 'POST', body));

        this.tratarResponse(response)

        return response;
    }

    private tratarResponse(response: Response) {
        if (response.status === 401) {
            alert("Não autorizado!");
            CookieManager.remove("Authorization");
            history.push('/login')
        }
    }

    public async put(url: string, body?: any): Promise<Response> {
        let response = await fetch(this.getRequestAtual(url, 'PUT', body));

        this.tratarResponse(response);

        return response;
    }

    public async get(url: string): Promise<Response> {
        let response = await fetch(this.getRequestAtual(url, 'GET'));

        this.tratarResponse(response);

        return response;
    }

    public async delete(url: string): Promise<Response> {
        let response = await fetch(this.getRequestAtual(url, 'DELETE'));

        this.tratarResponse(response);

        return response;
    }

    public static async tratarBodyResponse(response: Response, body: any) {
        debugger
        let mensagemErro = null;

        switch (response.status) {
            case 400:
                if (!body) {
                    alert("Ocorreu um erro!")
                    return;
                }

                const { errors, message } = body;

                if (errors) {
                    const keys = Object.keys(errors);

                    mensagemErro = (keys || []).map(key => {
                        const prop = body[key];

                        if (!prop) return undefined

                        return prop.message;
                    }).join(EOL);
                } else {
                    if (message) {
                        mensagemErro = message;
                    }
                }
                break;
            case 404:
                mensagemErro = "Erro 404, recurso não encontrado!";
                break;
            case 500:
                mensagemErro = "Ocorreu um erro interno no servidor!"
            default:
                if (body && body.message) {
                    mensagemErro = body.message;
                }
        }

        if (mensagemErro) {
            alert(mensagemErro);
        }
    }
}
