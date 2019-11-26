import React from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';

import { salvarConfiguracao } from '../../store/actions/configuracoes';
import { getConfiguracao } from '../../store/actions/configuracoes';
import { navbarTitleChange } from '../../store/actions/window';
import { ConfiguracaoState } from '../../store/reducers/configuracoes';
import LoadingPage from '../route/LoadingPage';
import NotFoundPage from '../route/NotFoundPage';
import ConfiguracaoForm from './form/ConfiguracaoForm';
import { ApplicationState } from '../../store/reducers';
import history from '../../config/history';

interface Props extends ConfiguracaoState {
    match: any
    dispatch: any
}

class ConfiguracaoAlterar extends React.Component<Props> {
    async componentDidMount() {
        const { dispatch } = this.props;
        await dispatch(getConfiguracao())
        await dispatch(navbarTitleChange("Configurações"))
    }

    async handleSubmit(e) {
        const { dispatch } = this.props;
        try {
            await dispatch(salvarConfiguracao(e))
            history.push("/")
        } catch (error) {
            alert('Ocorreu um erro ao salvar a configuração! ' + error.message)
        }
    }

    render() {
        const { configuracaoEdit } = this.props;


        if (!configuracaoEdit) {
            return <LoadingPage />
        }

        return <Container>
            <Row>
                <Col>
                    <ConfiguracaoForm initialValues={configuracaoEdit} onSubmit={this.handleSubmit.bind(this)} />
                </Col>
            </Row>
        </Container>
    }
}

const mapStateToProps = (state: ApplicationState) => state.configuracao

export default connect(mapStateToProps)(ConfiguracaoAlterar)