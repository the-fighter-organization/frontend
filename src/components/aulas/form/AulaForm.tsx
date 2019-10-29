import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { Button, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { reduxForm } from 'redux-form';

import history from '../../../config/history';
import { reduxFormOnSubmitFail } from '../../../config/reduxForm';
import { IAulaModel, ITurmaModel } from '../../../models/Turma';
import { AulaState } from '../../../store/reducers/aulas';
import AulaFormTabAdministrativo from './tabs/AulaFormTabAdministrativo';
import AulaFormTabDadosAula from './tabs/AulaFormTabDadosAula';
import validate from './validate';
import AulaFormTabPresencas from './tabs/AulaFormTabPresencas';

interface Props extends AulaState {
  edit?: boolean
  dispatch?: any
  handleSubmit?: any
  pristine?: boolean
  submitting?: boolean
  initialValues?: IAulaModel
}

interface State {
  activeTab: string
}

class AulaForm extends React.Component<Props, State> {
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
            {/* Dados da aula */}
            <NavItem>
              <NavLink
                className={`${activeTab === '1' ? 'active' : ''}`}
                onClick={() => { this.setActiveTab('1'); }}
              >
                Dados básicos
                  </NavLink>
            </NavItem>
            {/* Aulas */}
            {initialValues.turmaId &&
              <NavItem>
                <NavLink
                  className={`${activeTab === '2' ? 'active' : ''}`}
                  onClick={() => { this.setActiveTab('2'); }}
                >
                  Presenças
                  </NavLink>
              </NavItem>
            }
            {/* Administrativo */}
            {initialValues && initialValues._id && <NavItem>
              <NavLink
                className={classNames({ active: activeTab === '3', 'text-white': activeTab !== '3', 'bg-danger': activeTab !== '3' })}
                onClick={() => { this.setActiveTab('3'); }}
              >
                Administrativo
              </NavLink>
            </NavItem>}
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <AulaFormTabDadosAula isEdit={initialValues._id != undefined} />
            </TabPane>
            {initialValues.turmaId &&
              <React.Fragment>
                <TabPane tabId="2">
                  <AulaFormTabPresencas />
                </TabPane>
                <TabPane tabId="3">
                  <AulaFormTabAdministrativo initialValues={initialValues} />
                </TabPane>
              </React.Fragment>
            }
          </TabContent>
          <hr />
          <Row>
            <Col className="d-flex justify-content-end">
              <Button outline type="button" color="secondary" onClick={e => history.goBack()}>
                Voltar <FontAwesomeIcon icon="arrow-left" />
              </Button>
              <Button outline className="ml-2" disabled={submitting || pristine} type="submit" color="success">
                Salvar <FontAwesomeIcon icon="save" />
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
    )
  }
}

export default reduxForm({
  form: 'aula',
  validate: validate as any,
  onSubmitFail: reduxFormOnSubmitFail
})(AulaForm as any);