import React from 'react';
import {
	Collapse,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	UncontrolledDropdown,
	NavItem,
	NavLink,
	Container,
	Row,
	Col,
} from 'reactstrap';

const App: React.SFC = props => {
	const [isOpen, toggleNavbar] = React.useState(false);
	const [isCollapse, toggleIsCollapse] = React.useState(false);
	const [userOptionsOpen, toggleUserOptions] = React.useState(false);

	window.matchMedia('(max-width: 768px)').onchange = e => {
		toggleIsCollapse(e.matches)
	}

	function getNavbarClasses() {
		return isCollapse ? "d-flex justify-content-center" : "ml-auto";
	}

	function getUserDropdown() {

		if (isCollapse) {
			return (
				<React.Fragment>
					<NavItem>
						<NavLink onClick={e => toggleUserOptions(!userOptionsOpen)}>USUARIO</NavLink>
					</NavItem>
					<Collapse isOpen={userOptionsOpen}>
						<NavItem>
							<NavLink>Conta</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>Preferências</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>Sair</NavLink>
						</NavItem>
					</Collapse>
				</React.Fragment>
			)
		}

		return (
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
			</UncontrolledDropdown>)
	}

	return (
		<React.Fragment>
			<Navbar className="navbar navbar-expand-md navbar-light bg-light fixed-top border">
				<NavbarBrand>Warrior</NavbarBrand>
				<NavbarToggler className="text-success" onClick={() => toggleNavbar(!isOpen)} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className={getNavbarClasses()}>
						{getUserDropdown()}
					</Nav>
				</Collapse>
			</Navbar>
			<Container fluid className="h-100 mt-25 mt-5">
				<Row className="h-100">
					<Col md="2" lg="2" className="px-0 d-none d-md-block h-100">
						<Nav className="flex-column bg-light h-100 mt-2">
							<NavItem>
								<NavLink>Dashboard</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>Alunos</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>Financeiro</NavLink>
							</NavItem>
						</Nav>
					</Col>
					<Col className="bg-white">
					
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	)
}

export default App