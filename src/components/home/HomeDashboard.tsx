import React, { useEffect } from 'react';
import { Container, Row, Col, CardBody, Card, CardHeader, Table, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { navbarTitleChange } from '../../store/actions/window';
import { getAlunosComMensalidadesVencidas } from '../../store/actions/alunos';
import { Link } from 'react-router-dom';
import { ApplicationState } from '../../store/reducers';
import { AlunoState } from '../../store/reducers/alunos';
import { ALUNOS_EDITAR_ROUTE } from '../route/alunos';

interface IHomeDashboardProps extends AlunoState {
    dispatch: any;
    getAlunosComMensalidadesVencidas: typeof getAlunosComMensalidadesVencidas;
    navbarTitleChange: typeof navbarTitleChange;
}

const HomeDashboard = ({ getAlunosComMensalidadesVencidas, navbarTitleChange, alunosMensalidadesVencidas }: IHomeDashboardProps) => {
    useEffect(() => {
        navbarTitleChange("Dashboard")
        try {
            debugger
            getAlunosComMensalidadesVencidas()
        } catch (error) {
            debugger
            alert(error)
        }
    })

    const renderAlunosComMensalidadesVencidas = () => {
        debugger
        if (!alunosMensalidadesVencidas) {
            return <ListGroupItem>Não há alunos com a mensalidade vencida.</ListGroupItem>
        }
        return (alunosMensalidadesVencidas)
            .map((alunoMensalidade, index) => (
                <Link key={`aluno-mensalidade-vencida-${index}`} to={`${ALUNOS_EDITAR_ROUTE}/${alunoMensalidade._id}/5`}>
                    <ListGroupItem>
                        {alunoMensalidade.nome}
                    </ListGroupItem>
                </Link>
            ));
    }

    return (
        <Container>
            <Row>
                <Col xl="6" sm="12">
                    <Card>
                        <CardBody>
                            <h4>Alunos com mensalidades vencidas</h4>
                            <hr />
                            <ListGroup>
                                {renderAlunosComMensalidadesVencidas()}
                            </ListGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state: ApplicationState) => state.aluno;
const mapDispatchToProps = dispatch => ({
    getAlunosComMensalidadesVencidas: () => dispatch(getAlunosComMensalidadesVencidas()),
    navbarTitleChange: (payload: string) => navbarTitleChange(payload)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeDashboard)