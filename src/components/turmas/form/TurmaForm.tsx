import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { Button, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { reduxForm } from 'redux-form';

import history from '../../../config/history';
import { reduxFormOnSubmitFail } from '../../../config/reduxForm';
import { ITurmaModel } from '../../../models/Turma';
import { TurmaState } from '../../../store/reducers/turmas';
import TurmaFormTabAdministrativo from './tabs/TurmaFormTabAdministrativo';
import TurmaFormTabAulas from './tabs/TurmaFormTabAulas';
import TurmaFormTabDadosTurma from './tabs/TurmaFormTabDadosTurma';
import validate from './validate';
import TurmaFormTabAlunos from './tabs/TurmaFormTabAlunos';

interface Props extends TurmaState {
  edit?: boolean
  dispatch?: any
  handleSubmit?: any
  pristine?: boolean
  submitting?: boolean
  initialValues?: ITurmaModel
}

interface State {
  activeTab: string
}

class TurmaForm extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1'
    }
  }

  setActiveTab(activeTab: string) {
    this.setState({ activeTab })
  }

  render() {
    const { activeTab } = this.state;
    const { handleSubmit, pristine, submitting, initialValues } = this.props;

    return (
      <Container fluid>
        <form onSubmit={handleSubmit} noValidate>
          <Nav tabs>
            {/* Dados da turma */}
            <NavItem>
              <NavLink
                className={`${activeTab === '1' ? 'active' : ''}`}
                onClick={() => { this.setActiveTab('1'); }}
              >
                Dados básicos
                  </NavLink>
            </NavItem>
            {/* Alunos */}
            <NavItem>
              <NavLink
                className={`${activeTab === '2' ? 'active' : ''}`}
                onClick={() => { this.setActiveTab('2'); }}
              >
                Alunos
                  </NavLink>
            </NavItem>
            {/* Aulas */}
            <NavItem>
              <NavLink
                className={`${activeTab === '3' ? 'active' : ''}`}
                onClick={() => { this.setActiveTab('3'); }}
              >
                Aulas
                  </NavLink>
            </NavItem>
            {/* Administrativo */}
            {initialValues && initialValues._id && <NavItem>
              <NavLink
                className={classNames({ active: activeTab === '4', 'text-white': activeTab !== '4', 'bg-danger': activeTab !== '4' })}
                onClick={() => { this.setActiveTab('4'); }}
              >
                Administrativo
              </NavLink>
            </NavItem>}
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <TurmaFormTabDadosTurma />
            </TabPane>
            <TabPane tabId="2">
              <TurmaFormTabAlunos />
            </TabPane>
            <TabPane tabId="3">
              <TurmaFormTabAulas />
            </TabPane>
            <TabPane tabId="4">
              <TurmaFormTabAdministrativo />
            </TabPane>
          </TabContent>
          <hr />
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
  form: 'turma',
  validate: validate as any,
  onSubmitFail: reduxFormOnSubmitFail
})(TurmaForm as any);