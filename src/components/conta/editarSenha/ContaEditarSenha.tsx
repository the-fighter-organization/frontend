import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

import { editarSenha } from '../../../store/actions/conta';
import { ContaState } from '../../../store/reducers/conta';
import ContaNovoForm from './ContaEditarSenhaForm';

interface Props extends ContaState {
    match: any
    dispatch: any
}

class ContaEditarSenha extends React.Component<Props> {
    async handleSubmit(e) {
        const { dispatch } = this.props;
        try {
            
            await dispatch(editarSenha(e))
            alert("Você receberá um e-mail com o link de confirmação!")
        } catch (error) {
            alert('Ocorreu um erro ao editar a senha! ' + error.message)
        }
    }

    render() {
        return <Container>
            <Row>
                <Col className="d-flex justify-content-center">
                    <span className="display-4">Alterar senha</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="my-2">
                        <CardBody>
                            <ContaNovoForm onSubmit={this.handleSubmit.bind(this)} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    }
}

export default connect()(ContaEditarSenha)