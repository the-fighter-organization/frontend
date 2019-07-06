import React, { useState } from 'react';
import { Button, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { InjectedFormProps, reduxForm } from 'redux-form';

import history from '../../config/history';
import AlunoFormTabDadosAluno from './AlunoFormTabs/AlunoFormTabDadosAluno';
import AlunoFormTabResponsaveis from './AlunoFormTabs/AlunoFormTabResponsaveis';
import AlunoFormTabEndereco from './AlunoFormTabs/AlunoFormTabEndereco';
import AlunoFormTabEscolaridade from './AlunoFormTabs/AlunoFormTabEscolaridade';
import AlunoFormTabDemaisDados from './AlunoFormTabs/AlunoFormTabDemaisDados';

interface Props{
  asd:any
}

let AlunoForm = (props: InjectedFormProps<{}, {}, string>) => {
  const [activeTab, setActiveTab] = useState('1');
  const { handleSubmit } = props

  return (
    <Container fluid>
      <form onSubmit={handleSubmit}>
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
              Endereços
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
            <Button className="ml-2" type="submit" color="success">
              Salvar
            </Button>
          </Col>
        </Row>
      </form>
    </Container>
  )
}

export default reduxForm({
  form: 'aluno'
})(AlunoForm)