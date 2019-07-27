import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { reduxForm, Field, formValueSelector } from 'redux-form';

import history from '../../../config/history';
import { reduxFormOnSubmitFail } from '../../../config/reduxForm';
import validate from './validate';
import { renderInput } from '../../template/input/InputTemplate';
import { renderFileInput } from '../../template/input/InputFileTemplate';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store/reducers';

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

class ContaNovoForm extends React.Component<Props, State> {
  render() {
    const { handleSubmit, pristine, submitting, logoEmpresa } = this.props;

    return (
      <Container fluid>
        <form onSubmit={handleSubmit} noValidate>
          <Row>
            <Col lg="4" xl="4">
              <div className="d-flex justify-content-center mb-2">
                <img style={{ borderRadius: "50%", display: logoEmpresa ? 'unset' : 'none'  }} height={200} width={200} src={logoEmpresa} alt="Logo da empresa"/>
              </div>
              <Field component={renderFileInput} name="logoEmpresa" label="Insira um logotipo" />
            </Col>
            <Col>
              <Col>
                <Field component={renderInput} name="nome" label="Nome" placeholder="Nome do usuário" required />
              </Col>
              <Col>
                <Field component={renderInput} name="sobrenome" label="Sobrenome" placeholder="Sobrenome do usuário" required />
              </Col>
              <Col>
                <Field component={renderInput} name="email" label="E-mail" required placeholder="E-mail do usuário" />
              </Col>
              <Col>
                <Field component={renderInput} name="senha" type="password" label="Senha" required placeholder="Senha de login" />
              </Col>
              <Col>
                <Field component={renderInput} name="confirmacaoSenha" type="password" label="Confirmar senha" required placeholder="Repita a senha" />
              </Col>
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

const ContaNovoFormReduxForm = reduxForm({
  form: 'contaNovo',
  validate: validate as any,
  onSubmitFail: reduxFormOnSubmitFail
})(ContaNovoForm as any);

const selector = formValueSelector('contaNovo')

const mapStateToProps = (state: ApplicationState) => ({
  logoEmpresa: selector(state, 'logoEmpresa')
})

export default connect(mapStateToProps)(ContaNovoFormReduxForm)