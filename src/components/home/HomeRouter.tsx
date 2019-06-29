import React, { useState } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, UncontrolledDropdown } from 'reactstrap';

import Sidebar from '../template/sidebar/Sidebar';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../route/PrivateRoute';
import AlunoRouter from '../aluno/AlunoRouter';
import HomeDashboard from './HomeDashboard';

const HomeRouter = props => {
	const [sidebarActive, setSidebarActive] = useState(false)
	return (
		<React.Fragment>
			<div className="wrapper">
				{/* Sidebar Holder */}
				<Sidebar sidebarActive={sidebarActive} nomeEmpresa="NOME_EMPRESA" />
				{/* Page Content Holder */}
				<div id="content">
					<Navbar color="light" light expand="md">
						<div className="container-fluid">
							<button onClick={e => setSidebarActive(!sidebarActive)} type="button" id="sidebarCollapse" className={`navbar-btn${sidebarActive ? ' active' : ''}`}>
								<span />
								<span />
								<span />
							</button>
							<button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<i className="fas fa-align-justify" />
							</button>
							<div className="collapse navbar-collapse" id="navbarSupportedContent">
								{sidebarActive ? <NavbarBrand>Warrior</NavbarBrand> : null}

								<Nav className="ml-auto" navbar>
									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											USUARIO
                						</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem>
												Conta
                  							</DropdownItem>
											<DropdownItem>
												Preferências
											</DropdownItem>
											<DropdownItem divider />
											<DropdownItem>
												Sair
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>
								</Nav>
							</div>
						</div>
					</Navbar>
					<Switch>
						<PrivateRoute component={AlunoRouter} path="/alunos" />
						<PrivateRoute component={HomeDashboard} path="/" />
						<Redirect to={'/not-found'}/>
					</Switch>
				</div>
			</div>
		</React.Fragment>
	);
}


export default HomeRouter;
