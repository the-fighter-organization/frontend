import React, { useState } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, UncontrolledDropdown } from 'reactstrap';

import Sidebar from '../template/sidebar/Sidebar';

const Home = props => {
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

					<h2>Collapsible Sidebar Using Bootstrap 4</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<div className="line" />
					<h2>Lorem Ipsum Dolor</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
		</React.Fragment>
	);
}


export default Home;
