import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

import history from '../../../config/history';
import { reduxFormOnSubmitFail } from '../../../config/reduxForm';
import { IConfiguracao } from '../../../models/Configuracao';
import { ConfiguracaoState } from '../../../store/reducers/configuracoes';
import { getFieldMask, renderInput } from '../../template/input/InputTemplate';
import validate from './validate';

interface Props extends ConfiguracaoState {
  edit?: boolean
  dispatch?: any
  handleSubmit?: any
  pristine?: boolean
  submitting?: boolean
  initialValues?: IConfiguracao
}

const ConfiguracaoForm = (props: Props) => {
  const { handleSubmit, pristine, submitting, initialValues } = props;

  return (
    <Container fluid>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Field hidden component={renderInput} type="text" name="_id" label="Id" placeholder="ID DO REGISTRO" />
          <Col xl="6" lg="6" md="6" sm="12">
            <Field component={renderInput} required type="text" name="valorMensalidade" label="Valor da mensalidade" placeholder="Ex: R$ 70,00" {...getFieldMask("moedaBRL")} />
          </Col>
          <Col xl="6" lg="6" md="6" sm="12">
            <Field component={renderInput} required type="number" max="30" name="diaVencimentoMensalidade" label="Dia do vencimento da mensalidade" />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end">
            <Button outline type="button" color="secondary" onClick={e => history.goBack()}>
              Voltar <FontAwesomeIcon icon="arrow-left" />
            </Button>
            <Button outline className="ml-2" disabled={submitting || pristine} type="submit" color="success">
              Salvar  <FontAwesomeIcon icon="save" />
            </Button>
          </Col>
        </Row>
      </form>
    </Container>
  )
}

export default reduxForm({
  form: 'configuracao',
  validate: validate as any,
  onSubmitFail: reduxFormOnSubmitFail
})(ConfiguracaoForm as any);