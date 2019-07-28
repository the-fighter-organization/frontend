import React from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';

import { editarPerfil, getPerfilUsuario } from '../../../store/actions/conta';
import { ApplicationState } from '../../../store/reducers';
import { ContaState } from '../../../store/reducers/conta';
import ContaPerfilForm from './ContaPerfilForm';

interface Props extends ContaState {
    match: any
    dispatch: any
}

class ContaPerfil extends React.Component<Props> {
    async componentDidMount() {
        const { dispatch } = this.props;
        
        await dispatch(getPerfilUsuario())
    }

    async handleSubmit(e) {
        const { dispatch } = this.props;
        try {
            
            await dispatch(editarPerfil(e))
            alert("Registro salvo com sucesso!")
        } catch (error) {
            alert('Ocorreu um erro ao salvar o perfil! ' + error.message)
        }
    }

    render() {
        return <Container>
            <Row>
                <Col>
                    <ContaPerfilForm initialValues={this.props.perfil} onSubmit={this.handleSubmit.bind(this)} />
                </Col>
            </Row>
        </Container>
    }
}

const mapStateToProps = (state: ApplicationState) => state.conta;

export default connect(mapStateToProps)(ContaPerfil)