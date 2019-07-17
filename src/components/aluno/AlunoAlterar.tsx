import React from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';

import { getAluno, salvarAluno } from '../../store/actions/alunos';
import { AlunoState } from '../../store/reducers/alunos';
import NotFoundPage from '../route/NotFoundPage';
import AlunoForm from './form/AlunoForm';

// const AlunoAlterar = ({ match }) => (
//     <Container>
//         <Row>
//             <Col>
//                 <AlunoForm />
//             </Col>
//         </Row>
//     </Container>
// )

// export default AlunoAlterar;

interface Props extends AlunoState {
    match: any
    dispatch: any
}

class AlunoAlterar extends React.Component<Props> {
    async componentDidMount() {
        const { match, dispatch } = this.props;

        if (!match || !match.params.id) {
            return <NotFoundPage />
        }
        debugger
        const { id } = match.params;
        await dispatch(getAluno(id))
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
        return <Container>
            <Row>
                <Col>
                    <AlunoForm initialValues={this.props.alunoEdit} onSubmit={this.handleSubmit.bind(this)} />
                </Col>
            </Row>
        </Container>
    }
}

const mapStateToProps = state => state.aluno
export default connect(mapStateToProps)(AlunoAlterar)