import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Button, Container, Row, Table, UncontrolledCollapse } from 'reactstrap';
import Col from 'reactstrap/lib/Col';
import { reset } from 'redux-form';

import history from '../../config/history';
import { IAlunoModel } from '../../models/Aluno';
import { buscarAlunos } from '../../store/actions/alunos';
import { ApplicationState } from '../../store/reducers';
import { AlunoState } from '../../store/reducers/alunos';
import { ALUNOS_NOVO_ROUTE } from '../route/alunos';
import AlunoHomeBuscaForm from './busca/AlunoHomeBuscaForm';

interface Props extends AlunoState {
    dispatch: any
}

class AlunoHome extends React.Component<Props> {
    async componentWillMount() {
        await this.props.dispatch(buscarAlunos(null))
    }

    async handleSubmit(data: IAlunoModel) {
        try {
            await this.props.dispatch(buscarAlunos(data))
        } catch (error) {
            alert("Erro")
        }
    }

    async limparBusca() {
        await this.props.dispatch(reset("homeBusca"))
        await this.props.dispatch(buscarAlunos(null))
    }

    renderRows() {
        const { alunos } = this.props;

        if (!alunos || !alunos.length) {
            return <tr>
                <td colSpan={4}>
                    Não há nenhum item para exibir!
                </td>
            </tr>
        }

        return alunos.map(item => <tr key={item._id}>
            <td>{item.nome}</td>
            <td>{item.cpf}</td>
            <td>{item.rg}</td>
            <td>{item.telefone}</td>
        </tr>)
    }

    render() {
        return (
            <Container>
                <Row className="mb-2">
                    <Col>
                        <Button color="success" onClick={e => history.push(ALUNOS_NOVO_ROUTE)}>Novo</Button>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button color="info" id="btn-buscar" onClick={this.limparBusca.bind(this)} className="ml-2">Filtrar <FontAwesomeIcon icon="filter" /></Button>
                    </Col>
                </Row>
                <UncontrolledCollapse toggler="btn-buscar">
                    <Row>
                        <Col>
                            <AlunoHomeBuscaForm onSubmit={this.handleSubmit.bind(this) as any} />
                        </Col>
                    </Row>
                </UncontrolledCollapse>
                <Row>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>RG</th>
                                <th>Telefone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </Table>
                </Row>
            </Container >
        )
    }

}

const mapStateToProps = (state: ApplicationState) => state.aluno

export default connect(mapStateToProps)(AlunoHome);