import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { Field, FieldArray } from 'redux-form';

import { ITurmaModel } from '../../../../models/Turma';
import { ApplicationState } from '../../../../store/reducers';
import { renderInput } from '../../../template/input/InputTemplate';
import { buscarTurmas } from '../../../../store/actions/turmas';
import DateHandler from '../../../../util/date';

const renderPlanoAulaField: React.SFC<any> = ({ fields, meta: { error } }) => (
  <React.Fragment>
    <div className="my-2">
      <Button color="info" onClick={() => fields.push()}>
        Item do plano de aula <FontAwesomeIcon icon="plus" />
      </Button>
    </div>
    <ListGroup>
      {(fields || []).map((field: any, index: number) => <ListGroupItem key={`planos-aula-field-${index}`}>
        <Row>
          <Col xl="10">
            <Field component={renderInput} name={field} type="text" label={`Item do plano de aula ${index + 1}`} />
          </Col>
          <Col xl="2" className="d-flex align-self-center">
            <Button color="danger" onClick={() => fields.remove(index)}><FontAwesomeIcon icon="trash" /></Button>
          </Col>
        </Row>
      </ListGroupItem>)}
      {error && <ListGroupItem className="error">{error}</ListGroupItem>}
    </ListGroup>
  </React.Fragment>
)

interface IRenderTurmasOptionsProps {
  turmas?: ITurmaModel[]
}
const TurmaOptionsComponent = ({ turmas }: IRenderTurmasOptionsProps) => <React.Fragment>
  <option>Selecione...</option>
  {
    turmas.map(turma => <option key={turma._id} value={turma._id}>
      {turma.nome}
    </option>)
  }
</React.Fragment>

const mapStateToPropsTurmaOptions = (state: ApplicationState) => state.turma

const TurmaOptions = connect(mapStateToPropsTurmaOptions)(TurmaOptionsComponent as any)

const AulaFormTabDadosAulaComponent = (props: any) => {
  return (
    <Container className="mt-3">
      <Row>
        <Field hidden component={renderInput} type="text" name="_id" label="Id" placeholder="ID DO REGISTRO" />
        <Col xl="4" sm="12">
          <Row>
            <Col xl="12">
              <Field component={renderInput} disabled={props.isEdit} required type="select" name="turmaId" label="Turma" placeholder="Ex: Judô 1">
                <TurmaOptions />
              </Field>
            </Col>
            <Col xl="12">
              <Field component={renderInput} format={DateHandler.dateToInputDate} required type="date" name="dataAula" label="Data da aula" placeholder="Ex: 12/12/2019" />
            </Col>
          </Row>
        </Col>
        <Col xl="8" sm="12">
          <FieldArray component={renderPlanoAulaField} required name="planoAula" />
        </Col>
      </Row>
    </Container>
  )
}

interface IAulaFormTabDadosAulaProps {
  isEdit?: boolean;
  dispatch: any;
}

class AulaFormTabDadosAula extends React.Component<IAulaFormTabDadosAulaProps> {
  async componentDidMount() {
    await this.props.dispatch(buscarTurmas({ select: "_id nome" }))
  }

  render() {
    return <AulaFormTabDadosAulaComponent isEdit={this.props.isEdit} />
  }
}

export default connect()(AulaFormTabDadosAula)
