import { Col, Container, Row, CardBody, Card, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import React, { useState } from 'react'
import imagem from '../../assets/action-adult-athlete-598631.jpg'
import './Login.css'
import { FetchHandler } from '../../config/fetch';
import CookieManager from '../../config/cookie';
import history from '../../config/history';

const Login = props => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let form = document.getElementById('form-user') as HTMLFormElement | undefined;
        var body = new FormData(form);
        
        var http = new FetchHandler();
        
        http.authorized = false;
        let response = await http.post('usuarios/authenticate', body);
        console.log(response.ok)

        if(!response.ok){
            if(response.status === 500){
                alert("Ocorreu um erro desconhecido ao fazer a requisição")
                return
            }
            return
        }

        let data = await response.json() as any
        CookieManager.set('Authorization', `Bearer ${data.token}`, 4);
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
                                    <h1 className="text-center mb-3">Warrior</h1>
                                    <Form onSubmit={e => submitForm(e)} id="form-user">
                                        <FormGroup>
                                            <Label>Usuário</Label>
                                            <Input required type="email" name="email" onChange={e => setEmail(e.target.value)} value={email} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Senha</Label>
                                            <Input required type="password" name="senha" onChange={e => setSenha(e.target.value)} value={senha} />
                                        </FormGroup>
                                        <div className="d-flex justify-content-center">
                                            <Button type="submit" color="success" size="md">Login</Button>
                                        </div>
                                        <hr />                                        
                                        <div className="d-flex justify-content-center">
                                            <span>Ainda não tem conta? <a className="ml-1" href="/usuarios/criar">Inscreva-se</a></span>
                                        </div>
                                    </Form>
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