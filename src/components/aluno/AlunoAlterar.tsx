import React from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';

import { getAluno, salvarAluno } from '../../store/actions/alunos';
import { AlunoState } from '../../store/reducers/alunos';
import NotFoundPage from '../route/NotFoundPage';
import AlunoForm from './form/AlunoForm';
import LoadingPage from '../route/LoadingPage';
import { navbarTitleChange } from '../../store/actions/window';

interface Props extends AlunoState {
    match: any
    dispatch: any
}

interface State {
    activeTab: string;
}

class AlunoAlterar extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: null
        }
    }
    async componentDidMount() {
        const { match, dispatch } = this.props;

        if (!match || !match.params.id || !match.params.activeTab) {
            return <NotFoundPage />
        }

        const { id, activeTab } = match.params;
        console.log(activeTab)
        await this.setState({ activeTab })
        await dispatch(getAluno(id))
        await dispatch(navbarTitleChange("Alterar aluno"))

    }

    async handleSubmit(e) {
        const { dispatch } = this.props;
        try {
            await dispatch(salvarAluno(e))
        } catch (error) {
            alert('Ocorreu um erro ao salvar o aluno! ' + error.message)
        }
    }

    render() {
        const { alunoEdit } = this.props;
        const { activeTab } = this.state;


        if (!alunoEdit || !activeTab) {
            return <LoadingPage />
        }

        return <Container>
            <Row>
                <Col>
                    <AlunoForm activeTab={activeTab} initialValues={alunoEdit} onSubmit={this.handleSubmit.bind(this)} />
                </Col>
            </Row>
        </Container>
    }
}

const mapStateToProps = state => state.aluno
export default connect(mapStateToProps)(AlunoAlterar)