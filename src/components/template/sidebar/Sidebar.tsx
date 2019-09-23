import React from 'react';

import history from '../../../config/history';
import { ALUNOS_HOME_ROUTE } from '../../route/alunos';
import classNames from 'classnames'
import { TURMAS_HOME_ROUTE } from '../../route/turma';

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
            {/* <p>{nomeEmpresa}</p> */}
            <li className={classNames({ active: routeIsActive(pathname, "/", true) })}>
                <a onClick={e => history.push('/')}>Home</a>
            </li>
            <li className={classNames({ active: routeIsActive(pathname, ALUNOS_HOME_ROUTE) })}>
                <a onClick={e => history.push(ALUNOS_HOME_ROUTE)}>Alunos</a>
            </li>
            <li className={classNames({ active: routeIsActive(pathname, TURMAS_HOME_ROUTE) })}>
                <a onClick={e => history.push(TURMAS_HOME_ROUTE)}>Turmas</a>
            </li>
        </ul>
    </nav>
}


export default Sidebar;