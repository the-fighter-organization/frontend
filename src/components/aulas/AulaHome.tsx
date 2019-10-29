import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { Button, Container, Row, Table, UncontrolledCollapse, Col } from 'reactstrap';
import { reset } from 'redux-form';

import history from '../../config/history';
import { IAulaModel, ITurmaModel } from '../../models/Turma';
import { buscarAulas } from '../../store/actions/aulas';
import { navbarTitleChange } from '../../store/actions/window';
import { ApplicationState } from '../../store/reducers';
import { AulaState } from '../../store/reducers/aulas';
import { AULAS_EDITAR_ROUTE, AULAS_NOVO_ROUTE } from '../route/aula';
import AulaHomeBuscaForm from './busca/AulaHomeBuscaForm';
import { distanceInWords } from 'date-fns'
import pt from 'date-fns/locale/pt'
import DateHandler from '../../util/date';

interface Props extends AulaState {
    dispatch: any;
}

class AulaHome extends React.Component<Props> {
    async componentWillMount() {
        const { dispatch } = this.props;

        await dispatch(buscarAulas(null))
        await dispatch(navbarTitleChange("Aula"))
    }

    async handleSubmit(data: IAulaModel) {
        try {
            await this.props.dispatch(buscarAulas(data))
        } catch (error) {
            alert("Erro")
        }
    }

    async limparBusca() {
        await this.props.dispatch(reset("homeBusca"))
        await this.props.dispatch(buscarAulas(null))
    }

    renderRows() {
        const { aulas } = this.props;

        if (!aulas || !aulas.length) {
            return <tr>
                <td colSpan={4}>
                    Não há nenhum item para exibir!
                </td>
            </tr>
        }

        return aulas.map(item => {
            return <tr onClick={e => history.push(`${AULAS_EDITAR_ROUTE}/${(item.turma as ITurmaModel)._id}/${item._id}`)} style={{ cursor: 'pointer' }} key={item._id}>
                <td>{DateHandler.dateToShortDateTimeString(item.dataAula)}</td>
                <td>{(item.turma as ITurmaModel).nome || ''}</td>
                <td>{`Há ${distanceInWords(item.dataRegistro, new Date(), { locale: pt })}`}</td>
            </tr>
        })
    }

    render() {
        return (
            <Container>
                <Row className="mb-2">
                    <Col>
                        <Button color="success" onClick={e => history.push(AULAS_NOVO_ROUTE)}>Novo <FontAwesomeIcon icon="plus" /></Button>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button color="info" id="btn-buscar" onClick={this.limparBusca.bind(this)} className="ml-2">Filtrar <FontAwesomeIcon icon="filter" /></Button>
                    </Col>
                </Row>
                <UncontrolledCollapse toggler="btn-buscar">
                    <Row>
                        <Col>
                            <AulaHomeBuscaForm onSubmit={this.handleSubmit.bind(this) as any} />
                        </Col>
                    </Row>
                </UncontrolledCollapse>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Data e hora da aula</th>
                                    <th>Turma</th>
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

const mapStateToProps = (state: ApplicationState) => state.aula

export default connect(mapStateToProps)(AulaHome);