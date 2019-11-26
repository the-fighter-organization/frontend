import React from 'react';

import history from '../../../config/history';
import { ALUNOS_HOME_ROUTE } from '../../route/alunos';
import classNames from 'classnames'
import { TURMAS_HOME_ROUTE } from '../../route/turma';
import { AULAS_HOME_ROUTE } from '../../route/aula';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { CONFIGURACOES_HOME_ROUTE } from '../../route/configuracoes';

interface ISidebarProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    sidebarActive: boolean;
    // nomeEmpresa:string;
}

const routeIsActive = (pathName: string, route: string, exact: boolean = false) => {
    const strCompare = exact ? pathName : pathName.substr(0, route.length);

    return strCompare === route;
}

const Sidebar = (props: ISidebarProps) => {
    const { sidebarActive, ...rest } = props;

    const { pathname } = window.location;

    return <nav {...rest} id="sidebar" className={`${rest.className || ''} ${sidebarActive ? 'active' : ''}`.trim()}>
        <div className="sidebar-header">
            <a href="/" className="display-4 text-white d-flex justify-content-center" style={{ fontSize: 40 }}><strong>Warrior</strong></a>
        </div>
        <ul className="list-unstyled components">
            <SidebarItem pathname={pathname} to="/" exact={true}>Home</SidebarItem>
            <SidebarItem pathname={pathname} to={ALUNOS_HOME_ROUTE}>Alunos</SidebarItem>
            <SidebarItem pathname={pathname} to={TURMAS_HOME_ROUTE}>Turmas</SidebarItem>
            <SidebarItem pathname={pathname} to={AULAS_HOME_ROUTE}>Aulas</SidebarItem>
        </ul>
        <hr />
        <div className="d-flex h-50 justify-content-center">
            <Button tag={Link} color="dark" block to={CONFIGURACOES_HOME_ROUTE} className="align-self-end">
                <FontAwesomeIcon icon="cog" size="2x" />
            </Button>
        </div>

    </nav>
}

interface ISidebarItemProps extends React.HtmlHTMLAttributes<HTMLLIElement> {
    pathname: string;
    to: string;
    exact?: boolean;
}

const SidebarItem: React.FunctionComponent<ISidebarItemProps> = (props) => {
    const { pathname, to, exact, children, ...rest } = props;
    return <li {...rest} style={{ ...rest.style, cursor: 'pointer' }} className={classNames({ active: routeIsActive(pathname, to, exact) })}>
        <a onClick={e => history.push(to)}>{children}</a>
    </li>
}


export default Sidebar;