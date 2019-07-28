import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

import history from '../../../config/history';
import { reduxFormOnSubmitFail } from '../../../config/reduxForm';
import { renderInput } from '../../template/input/InputTemplate';
import validate from './validate';

interface Props {
  dispatch?: any
  handleSubmit?: any
  pristine?: boolean
  submitting?: boolean
  initialValues?: any;
  fields: any;
  logoEmpresa: any;
}

interface State {
  logoAtual: any
}

class ContaEditarSenhaForm extends React.Component<Props, State> {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <Container fluid>
        <form onSubmit={handleSubmit} noValidate>
          <Row>
            <Col xl="4" lg="4" md="12">
              <Field component={renderInput} name="email" type="email" label="E-mail para confirmação" placeholder="Digite o e-mail a confirmar" required />
            </Col>
            <Col xl="4" lg="4" md="12">
              <Field component={renderInput} name="senha" type="password" label="Senha" placeholder="Nova senha de usuário" required />
            </Col>
            <Col xl="4" lg="4" md="12">
              <Field component={renderInput} name="confirmacaoSenha" type="password" label="Confirmação da senha" placeholder="Confirmação de senha" required />
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
}

export default reduxForm({
  form: 'editarSenha',
  validate: validate as any,
  onSubmitFail: reduxFormOnSubmitFail
})(ContaEditarSenhaForm as any);