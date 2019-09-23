import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { Button, Container, Row, Table, UncontrolledCollapse } from 'reactstrap';
import Col from 'reactstrap/lib/Col';
import { reset } from 'redux-form';

import history from '../../config/history';
import { ITurmaModel } from '../../models/Turma';
import { buscarTurmas } from '../../store/actions/turmas';
import { navbarTitleChange } from '../../store/actions/window';
import { ApplicationState } from '../../store/reducers';
import { TurmaState } from '../../store/reducers/turmas';
import { TURMAS_EDITAR_ROUTE, TURMAS_NOVO_ROUTE } from '../route/turma';
import TurmaHomeBuscaForm from './busca/TurmaHomeBuscaForm';
import { distanceInWords } from 'date-fns'
import pt from 'date-fns/locale/pt'

interface Props extends TurmaState {
    dispatch: any;
}

class TurmaHome extends React.Component<Props> {
    async componentWillMount() {
        const { dispatch } = this.props;

        await dispatch(buscarTurmas(null))
        await dispatch(navbarTitleChange("Turma"))
    }

    async handleSubmit(data: ITurmaModel) {
        try {
            await this.props.dispatch(buscarTurmas(data))
        } catch (error) {
            alert("Erro")
        }
    }

    async limparBusca() {
        await this.props.dispatch(reset("homeBusca"))
        await this.props.dispatch(buscarTurmas(null))
    }

    renderRows() {
        const { turmas } = this.props;

        if (!turmas || !turmas.length) {
            return <tr>
                <td colSpan={4}>
                    Não há nenhum item para exibir!
                </td>
            </tr>
        }
        debugger
        return turmas.map(item => {
            return <tr onClick={e => history.push(`${TURMAS_EDITAR_ROUTE}/${item._id}`)} style={{ cursor: 'pointer' }} key={item._id}>
                <td>{item.nome}</td>
                <td>{item.arteMarcial}</td>
                <td>{item.localTreino}</td>
                <td>{`Há ${distanceInWords(item.dataRegistro, new Date(), { locale: pt })}`}</td>
            </tr>
        })
    }

    render() {
        return (
            <Container>
                <Row className="mb-2">
                    <Col>
                        <Button color="success" onClick={e => history.push(TURMAS_NOVO_ROUTE)}>Novo</Button>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button color="info" id="btn-buscar" onClick={this.limparBusca.bind(this)} className="ml-2">Filtrar <FontAwesomeIcon icon="filter" /></Button>
                    </Col>
                </Row>
                <UncontrolledCollapse toggler="btn-buscar">
                    <Row>
                        <Col>
                            <TurmaHomeBuscaForm onSubmit={this.handleSubmit.bind(this) as any} />
                        </Col>
                    </Row>
                </UncontrolledCollapse>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Arte marcial</th>
                                    <th>Local de treino</th>
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

const mapStateToProps = (state: ApplicationState) => state.turma

export default connect(mapStateToProps)(TurmaHome);