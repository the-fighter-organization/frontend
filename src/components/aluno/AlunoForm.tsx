import { Row, Container, Nav, NavItem, NavLink, TabContent, TabPane, Col, Card, CardTitle, CardText, Button } from "reactstrap";
import React, { useState } from "react";

const AlunoForm = props => {
    const [activeTab, setActiveTab] = useState('1');
    return (
        <Container fluid>
            <div>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={`${activeTab == '1' ? 'active' : ''}`}
                  onClick={() => { setActiveTab('1'); }}
                >
                  Tab1
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={`${activeTab == '2' ? 'active' : ''}`}
                  onClick={() => { setActiveTab('2'); }}
                >
                  Moar Tabs
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <h4>Tab 1 Contents</h4>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                <Col sm="12">
                    <h4>Tab 2 Contents</h4>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </Container>
    )
}

export default AlunoForm;