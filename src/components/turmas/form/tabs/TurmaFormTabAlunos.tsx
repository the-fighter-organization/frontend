import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { Field, FieldArray } from 'redux-form';

import { IAlunoModel } from '../../../../models/Aluno';
import { buscarAlunos } from '../../../../store/actions/alunos';
import { ApplicationState } from '../../../../store/reducers';
import { AlunoState } from '../../../../store/reducers/alunos';
import { renderInput } from '../../../template/input/InputTemplate';

interface IRenderAlunosProps extends AlunoState {
    fields: any;
    meta: any;
    dispatch: (func: any) => Promise<any>
}

const renderAlunosOptions = (alunos: IAlunoModel[], index: number) => (
    <React.Fragment>
        <option>Selecione...</option>
        {alunos.map(aluno => <option key={`option-${index}-${aluno._id}`} value={aluno._id}>
            {aluno.nome}
        </option>)}
    </React.Fragment>
)

const renderAlunos = ({ fields, meta: { error, submitFailed }, alunos }: IRenderAlunosProps) => {
    return (
        <ListGroup>
            <div className="mb-2">
                <Button color="info" onClick={() => fields.push()}>
                    Novo <FontAwesomeIcon icon="plus" />
                </Button>
            </div>
            {fields.map((field, index) => (
                <ListGroupItem key={index}>
                    <Row>
                        <Col lg="6" xl="6" md="6" sm="12">
                            <Field
                                name={field}
                                type="select"
                                component={renderInput}
                                label={`Aluno ${index + 1}`}
                                placeholder="Selecione o aluno"
                            >
                                {renderAlunosOptions(alunos, index)}
                            </Field>
                        </Col>

                        <Col className="d-flex align-self-center" lg="3" xl="3" md="6" sm="12">
                            <Button
                                color="danger"
                                title="Remover aluno"
                                onClick={() => fields.remove(index)}
                            >Remover <FontAwesomeIcon icon="trash" />
                            </Button>
                        </Col>
                    </Row>
                </ListGroupItem>
            ))
            }
            {error && <ListGroupItem className="error">{error}</ListGroupItem>}
        </ListGroup >
    )
}

const mapStateToProps = (state: ApplicationState) => state.aluno
const renderAlunosWithRedux = connect(mapStateToProps)(renderAlunos as any);

const TurmaFormTabAlunos = props => {
    props.dispatch(buscarAlunos({ select: '_id nome' }))
    return (
        <Container className="mt-3">
            <Row>
                <Col>
                    <FieldArray name="alunos" component={renderAlunosWithRedux as any} />
                </Col>
            </Row>
        </Container>
    )
}

export default connect()(TurmaFormTabAlunos)
