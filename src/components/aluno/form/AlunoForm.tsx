import React, { useState } from 'react';
import { Button, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { InjectedFormProps, reduxForm } from 'redux-form';

import history from '../../../config/history';
import AlunoFormTabDadosAluno from './tabs/AlunoFormTabDadosAluno';
import AlunoFormTabResponsaveis from './tabs/AlunoFormTabResponsaveis';
import AlunoFormTabEndereco from './tabs/AlunoFormTabEndereco';
import AlunoFormTabEscolaridade from './tabs/AlunoFormTabEscolaridade';
import AlunoFormTabDemaisDados from './tabs/AlunoFormTabDemaisDados';
import validate from './validate'

let AlunoForm = (props: InjectedFormProps<{}, {}, string>) => {
  const [activeTab, setActiveTab] = useState('1');
  const { handleSubmit, pristine, submitting } = props

  return (
    <Container fluid>
      <form onSubmit={handleSubmit} noValidate>
        <Nav tabs>
          {/* Dados do aluno */}
          <NavItem>
            <NavLink
              className={`${activeTab === '1' ? 'active' : ''}`}
              onClick={() => { setActiveTab('1'); }}
            >
              Dados básicos
                </NavLink>
          </NavItem>
          {/* Responsáveis */}
          <NavItem>
            <NavLink
              className={`${activeTab === '2' ? 'active' : ''}`}
              onClick={() => { setActiveTab('2'); }}
            >
              Responsáveis
                </NavLink>
          </NavItem>
          {/* Endereços */}
          <NavItem>
            <NavLink
              className={`${activeTab === '3' ? 'active' : ''}`}
              onClick={() => { setActiveTab('3'); }}
            >
              Endereço
                </NavLink>
          </NavItem>
          {/* Escolaridade */}
          <NavItem>
            <NavLink
              className={`${activeTab === '4' ? 'active' : ''}`}
              onClick={() => { setActiveTab('4'); }}
            >
              Escolaridade
                </NavLink>
          </NavItem>
          {/* Demais informações */}
          <NavItem>
            <NavLink
              className={`${activeTab === '5' ? 'active' : ''}`}
              onClick={() => { setActiveTab('5'); }}
            >
              Demais informações
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <AlunoFormTabDadosAluno />
          </TabPane>
          <TabPane tabId="2">
            <AlunoFormTabResponsaveis/>
          </TabPane>
          <TabPane tabId="3">
            <AlunoFormTabEndereco/>
          </TabPane>
          <TabPane tabId="4">
            <AlunoFormTabEscolaridade/>
          </TabPane>
          <TabPane tabId="5">
            <AlunoFormTabDemaisDados/>
          </TabPane>
        </TabContent>
        <hr />
        <Row>
          <Col className="d-flex justify-content-end">
            <Button type="button" color="secondary" onClick={e => history.goBack()}>
              Voltar
            </Button>
            <Button className="ml-2" disabled={submitting || pristine} type="submit" color="success">
              Salvar
            </Button>
          </Col>
        </Row>
      </form>
    </Container>
  )
}

export default reduxForm({
  form: 'aluno',
  validate: validate as any
})(AlunoForm)