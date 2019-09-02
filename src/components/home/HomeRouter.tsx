import React, { useState } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, UncontrolledDropdown } from 'reactstrap';

import Sidebar from '../template/sidebar/Sidebar';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../route/PrivateRoute';
import AlunoRouter from '../aluno/AlunoRouter';
import HomeDashboard from './HomeDashboard';
import CookieManager from '../../config/cookie';
import history from '../../config/history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CONTA_PERFIL_ROUTE } from '../route/conta';
import ContaRouter from '../conta/ContaRouter';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store/reducers';
import { WindowState } from '../../store/reducers/window';

interface Props extends WindowState {

}

const HomeRouter: React.SFC<Props> = ({ navbarTitle }) => {
	const [sidebarActive, setSidebarActive] = useState(false);

	const getUserName = () => {
		const cookie = CookieManager.get("User");

		if (!cookie) {
			return 'Erro ao carregar :('
		}
		const user = JSON.parse(cookie);

		return user.nome;
	}

	const logout = () => {
		CookieManager.remove();
		history.push("/login")
	}
	return (
		<React.Fragment>
			<div className="wrapper">
				{/* Sidebar Holder */}
				<Sidebar sidebarActive={sidebarActive} />
				{/* Page Content Holder */}
				<div id="content">
					<Navbar color="light" light expand="md" style={{ height: 50 }} className="mb-3">
						<div className="container-fluid">
							<button onClick={e => setSidebarActive(!sidebarActive)} type="button" id="sidebarCollapse" className={`navbar-btn${sidebarActive ? ' active' : ''}`}>
								<span />
								<span />
								<span />
							</button>
							<button className="btn btn-light d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<FontAwesomeIcon icon="align-justify" />
							</button>
							<div className="collapse navbar-collapse" id="navbarSupportedContent">
								<NavbarBrand className="ml-2" style={{ fontSize: '28px' }}>{navbarTitle}</NavbarBrand>
								<Nav className="ml-auto" navbar>
									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav>
											{getUserName()}
										</DropdownToggle>
										<DropdownMenu right tag="button">
											<DropdownItem tag="a" onClick={e => history.push(CONTA_PERFIL_ROUTE)}>
												Conta
                  							</DropdownItem>
											{/* <DropdownItem tag="a">
												Preferências
											</DropdownItem> */}
											<DropdownItem divider tag="div" />
											<DropdownItem tag="a" onClick={e => logout()}>
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
						<PrivateRoute path="/conta" component={ContaRouter} />
						<PrivateRoute component={HomeDashboard} path="/" />
						<Redirect to={'/not-found'} />
					</Switch>
				</div>
			</div>
		</React.Fragment>
	);
}

const mapStateToProps = (state: ApplicationState) => state.window

export default connect(mapStateToProps)(HomeRouter);
