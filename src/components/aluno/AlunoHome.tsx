import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { Button, Container, Row, Table, UncontrolledCollapse } from 'reactstrap';
import Col from 'reactstrap/lib/Col';
import { reset } from 'redux-form';

import history from '../../config/history';
import { IAlunoModel } from '../../models/Aluno';
import { buscarAlunos } from '../../store/actions/alunos';
import { ApplicationState } from '../../store/reducers';
import { AlunoState } from '../../store/reducers/alunos';
import { ALUNOS_NOVO_ROUTE, ALUNOS_EDITAR_ROUTE } from '../route/alunos';
import AlunoHomeBuscaForm from './busca/AlunoHomeBuscaForm';
import { formatarCpfPessoa } from '../../util/string';
import { distanceInWords } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { navbarTitleChange } from '../../store/actions/window';

interface Props extends AlunoState {
    dispatch: any
}

class AlunoHome extends React.Component<Props> {
    async componentWillMount() {
        const { dispatch } = this.props;

        try {
            await dispatch(buscarAlunos({ filters: null }))
        } catch (error) {
            alert(error)
        }
        await dispatch(navbarTitleChange("Alunos"))
    }

    async handleSubmit(filters: IAlunoModel) {
        try {
            await this.props.dispatch(buscarAlunos({ filters }))
        } catch (error) {
            alert("Erro")
        }
    }

    async limparBusca() {
        await this.props.dispatch(reset("homeBusca"));
        try {
            await this.props.dispatch(buscarAlunos(null))
        } catch (error) {
            alert(error)
        }
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

        return alunos.map(item => {
            const dataRegistro = new Date(item.dataRegistro);
            const dataComparacao = new Date();

            return <tr onClick={e => history.push(`${ALUNOS_EDITAR_ROUTE}/${item._id}/1`)} style={{ cursor: 'pointer' }} key={item._id}>
                <td>{item.nome}</td>
                <td>{formatarCpfPessoa(item.cpf)}</td>
                <td>{`Há ${distanceInWords(dataRegistro, dataComparacao, { locale: pt })}`}</td>
            </tr>
        })
    }

    render() {
        return (
            <Container>
                <Row className="mb-2">
                    <Col>
                        <Button color="success" onClick={e => history.push(ALUNOS_NOVO_ROUTE)}>Novo <FontAwesomeIcon icon="plus" /></Button>
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
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Criado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderRows()}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container >
        )
    }

}

const mapStateToProps = (state: ApplicationState) => state.aluno;

export default connect(mapStateToProps)(AlunoHome);