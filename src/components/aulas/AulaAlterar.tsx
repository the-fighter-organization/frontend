import React from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';

import { getAula, salvarAula } from '../../store/actions/aulas';
import { AulaState } from '../../store/reducers/aulas';
import NotFoundPage from '../route/NotFoundPage';
import AulaForm from './form/AulaForm';
import LoadingPage from '../route/LoadingPage';
import { navbarTitleChange } from '../../store/actions/window';
import { IAulaPresencaModel, ITurmaModel } from '../../models/Turma';

interface Props extends AulaState {
    match: any
    dispatch: any
}

class AulaAlterar extends React.Component<Props> {
    async componentDidMount() {
        const { match, dispatch } = this.props;

        if (!match || !match.params.id || !match.params.turmaId) {
            return <NotFoundPage />
        }

        const { id, turmaId } = match.params;
        await dispatch(getAula(turmaId, id))
        await dispatch(navbarTitleChange("Alterar aula"))
    }

    async handleSubmit(e) {
        const { dispatch } = this.props;
        try {
            await dispatch(salvarAula(e))
        } catch (error) {
            alert('Ocorreu um erro ao salvar o aula! ' + error.message)
        }
    }

    render() {
        const { aulaEdit } = this.props;


        if (!aulaEdit) {
            return <LoadingPage />
        }

        if (!aulaEdit.presencas || !aulaEdit.presencas.length) {
            aulaEdit.presencas = (aulaEdit.turma as ITurmaModel).alunos.map(item => ({ aluno: item as any, presente: true, nota: null, observacoesNegativas: [], observacoesPositivas: [] }) as IAulaPresencaModel)
        }

        return <Container>
            <Row>
                <Col>
                    <AulaForm initialValues={aulaEdit} onSubmit={this.handleSubmit.bind(this)} />
                </Col>
            </Row>
        </Container>
    }
}

const mapStateToProps = state => state.aula
export default connect(mapStateToProps)(AulaAlterar)