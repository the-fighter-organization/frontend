import './Login.css';

import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

import imagem from '../../../assets/action-adult-athlete-598631.jpg';
import CookieManager from '../../../config/cookie';
import { FetchHandler } from '../../../config/fetch';
import history from '../../../config/history';
import { CONTA_EDITAR_SENHA_ROUTE } from '../../route/conta';
import LoginForm from './LoginForm';

const Login = props => {
    async function submitForm(e: any) {
        var http = new FetchHandler();

        http.authorized = false;
        let response = await http.post('usuarios/authenticate', e);

        if (!response.ok) {
            if (response.status === 500) {
                alert("Ocorreu um erro desconhecido ao fazer a requisição")
            }
            return
        }

        let data = await response.json() as any
        CookieManager.set('Authorization', `Bearer ${data.token}`, 4);
        CookieManager.set('User', JSON.stringify(data.userInfo), 4);
        history.push('/')
    }
    return <Container fluid className="h-100">
        <Row className="h-100">
            <Col lg="8" md="4" style={{
                backgroundImage: `url(${imagem})`, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} className="d-none d-lg-block">

            </Col>
            <Col lg="4" md="8" className="d-flex">
                <Container className="align-self-center">
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <h2 className="text-center mb-3">Warrior</h2>
                                    <LoginForm onSubmit={submitForm as any} />
                                    <hr />
                                    <div className="d-flex justify-content-center">
                                        <span>Ainda não tem conta? <a className="ml-1" href="/conta/novo">Inscreva-se</a></span>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <span>Esqueceu a senha? <a className="ml-1" href={CONTA_EDITAR_SENHA_ROUTE}>Altere a senha</a></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    </Container>
}

export default Login;