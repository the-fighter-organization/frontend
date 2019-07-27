import React from 'react';
import { Col, Container, Row, Card, CardBody } from 'reactstrap';

import { novaConta } from '../../../store/actions/conta';
import { ContaState } from '../../../store/reducers/conta';
import ContaNovoForm from './ContaNovoForm';
import { connect } from 'react-redux';

interface Props extends ContaState {
    match: any
    dispatch: any
}

class ContaNovo extends React.Component<Props> {
    async handleSubmit(e) {
        const { dispatch } = this.props;
        try {
            
            await dispatch(novaConta(e))
            alert("Registro salvo com sucesso!")
        } catch (error) {
            alert('Ocorreu um erro ao salvar o perfil! ' + error.message)
        }
    }

    render() {
        return <Container>
            <Row>
                <Col className="d-flex justify-content-center">
                    <span className="display-4">Novo usuário</span>
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

export default connect()(ContaNovo)