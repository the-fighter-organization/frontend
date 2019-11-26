import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { reduxForm } from 'redux-form';

import history from '../../../config/history';
import { AlunoState } from '../../../store/reducers/alunos';
import AlunoFormTabAdministrativo from './tabs/AlunoFormTabAdministrativo';
import AlunoFormTabDadosAluno from './tabs/AlunoFormTabDadosAluno';
import AlunoFormTabDemaisDados from './tabs/AlunoFormTabDemaisDados';
import AlunoFormTabEndereco from './tabs/AlunoFormTabEndereco';
import AlunoFormTabResponsaveis from './tabs/AlunoFormTabResponsaveis';
import validate from './validate';
import classNames from 'classnames'
import { IAlunoModel } from '../../../models/Aluno';
import { reduxFormOnSubmitFail } from '../../../config/reduxForm';
import AlunoFormTabMensalidades from './tabs/mensalidades/AlunoFormTabMensalidades';

interface Props extends AlunoState {
  edit?: boolean
  dispatch?: any
  handleSubmit?: any
  pristine?: boolean
  submitting?: boolean
  initialValues?: IAlunoModel;
  activeTab?: string;
}

interface State {
  activeTab: string
}


class AlunoForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      activeTab: '1'
    }

  }

  async componentDidMount() {
    const { activeTab } = this.props;

    await this.setState({ activeTab })
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
            {/* Dados do aluno */}
            <NavItem>
              <NavLink
                className={`${activeTab === '1' ? 'active' : ''}`}
                onClick={() => { this.setActiveTab('1'); }}
              >
                Dados básicos
                  </NavLink>
            </NavItem>
            {/* Responsáveis */}
            <NavItem>
              <NavLink
                className={`${activeTab === '2' ? 'active' : ''}`}
                onClick={() => { this.setActiveTab('2'); }}
              >
                Responsáveis
                  </NavLink>
            </NavItem>
            {/* Endereços */}
            <NavItem>
              <NavLink
                className={`${activeTab === '3' ? 'active' : ''}`}
                onClick={() => { this.setActiveTab('3'); }}
              >
                Endereço
                  </NavLink>
            </NavItem>
            {/* Demais informações */}
            <NavItem>
              <NavLink
                className={`${activeTab === '4' ? 'active' : ''}`}
                onClick={() => { this.setActiveTab('4'); }}
              >
                Demais informações
              </NavLink>
            </NavItem>
            {/* Mensalidades */}
            <NavItem>
              <NavLink
                className={`${activeTab === '5' ? 'active' : ''}`}
                onClick={() => { this.setActiveTab('5'); }}
              >
                Mensalidades
              </NavLink>
            </NavItem>
            {/* Administrativo */}
            {initialValues && initialValues._id && <NavItem>
              <NavLink
                className={classNames({ active: activeTab === '6', 'text-white': activeTab !== '6', 'bg-danger': activeTab !== '6' })}
                onClick={() => { this.setActiveTab('6'); }}
              >
                Administrativo
              </NavLink>
            </NavItem>}
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <AlunoFormTabDadosAluno />
            </TabPane>
            <TabPane tabId="2">
              <AlunoFormTabResponsaveis />
            </TabPane>
            <TabPane tabId="3">
              <AlunoFormTabEndereco />
            </TabPane>
            <TabPane tabId="4">
              <AlunoFormTabDemaisDados />
            </TabPane>
            <TabPane tabId="5">
              <AlunoFormTabMensalidades />
            </TabPane>
            <TabPane tabId="6">
              <AlunoFormTabAdministrativo initialValues={initialValues} />
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
  form: 'aluno',
  validate: validate as any,
  onSubmitFail: reduxFormOnSubmitFail
})(AlunoForm as any) as any;