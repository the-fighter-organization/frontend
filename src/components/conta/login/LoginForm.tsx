import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

import { renderInput } from '../../template/input/InputTemplate';
import validate from './validate';

interface Props {
  handleSubmit?: any
  pristine?: boolean
  submitting?: boolean
}

class Login extends React.Component<Props> {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <Container fluid>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col xl="12">
              <Field
                name={"email"}
                type="email"
                component={renderInput}
                label="E-mail"
                placeholder="Ex: nome@dominio.com"
              />
            </Col>
            <Col xl="12">
              <Field
                name="senha"
                type="password"
                component={renderInput}
                label="Senha"
                placeholder="Digite a senha"
              />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <Button outline className="ml-2" disabled={submitting || pristine} type="submit" color="success">
                Login
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
    )
  }
}

export default reduxForm({
  form: 'login',
  validate: validate as any
})(Login as any);