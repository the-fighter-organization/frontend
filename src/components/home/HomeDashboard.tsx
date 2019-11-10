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
}

const HomeDashboard = ({ dispatch, alunosMensalidadesVencidas }: IHomeDashboardProps) => {
    useEffect(() => {
        dispatch(navbarTitleChange("Dashboard"))
        dispatch(getAlunosComMensalidadesVencidas())
    })

    const renderAlunosComMensalidadesVencidas = () => (alunosMensalidadesVencidas
        .map((alunoMensalidade, index) => (
            <Link key={`aluno-mensalidade-vencida-${index}`} to={`${ALUNOS_EDITAR_ROUTE}/${alunoMensalidade._id}/5`}>
                <ListGroupItem>
                    {alunoMensalidade.nome}
                </ListGroupItem>
            </Link>
        ))
    )

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

export default connect(mapStateToProps)(HomeDashboard)