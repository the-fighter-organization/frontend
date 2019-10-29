import React from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';

import { getTurma, salvarTurma } from '../../store/actions/turmas';
import { TurmaState } from '../../store/reducers/turmas';
import NotFoundPage from '../route/NotFoundPage';
import TurmaForm from './form/TurmaForm';
import LoadingPage from '../route/LoadingPage';
import { navbarTitleChange } from '../../store/actions/window';

interface Props extends TurmaState {
    match: any
    dispatch: any
}

class TurmaAlterar extends React.Component<Props> {
    async componentDidMount() {
        const { match, dispatch } = this.props;

        if (!match || !match.params.id) {
            return <NotFoundPage />
        }

        const { id } = match.params;
        await dispatch(getTurma(id))
        await dispatch(navbarTitleChange("Alterar turma"))
    }

    async handleSubmit(e) {
        const { dispatch } = this.props;
        try {
            await dispatch(salvarTurma(e))
        } catch (error) {
            alert('Ocorreu um erro ao salvar o turma! ' + error.message)
        }
    }

    render() {
        const { turmaEdit } = this.props;


        if (!turmaEdit) {
            return <LoadingPage />
        }
        return <Container>
            <Row>
                <Col>
                    <TurmaForm initialValues={turmaEdit} onSubmit={this.handleSubmit.bind(this)} />
                </Col>
            </Row>
        </Container>
    }
}

const mapStateToProps = state => state.turma
export default connect(mapStateToProps)(TurmaAlterar)