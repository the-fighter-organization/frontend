import React from 'react';

import history from '../../../config/history';
import { ALUNOS_HOME_ROUTE } from '../../route/alunos';
import classNames from 'classnames'

interface ISidebarProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    sidebarActive: boolean;
    // nomeEmpresa:string;
}

const Sidebar = (props: ISidebarProps) => {
    const { sidebarActive, ...rest } = props
    debugger
    const { pathname } = window.location;

    return <nav {...rest} id="sidebar" className={`${rest.className || ''} ${sidebarActive ? 'active' : ''}`.trim()}>
        <div className="sidebar-header">
            <a href="/" className="display-4 text-white">Warrior</a>
        </div>
        <ul className="list-unstyled components">
            {/* <p>{nomeEmpresa}</p> */}
            <li className={classNames({ active: pathname == '/'})}>
                <a onClick={e => history.push('/')}>Home</a>
            </li>
            <li className={classNames({ active: pathname == ALUNOS_HOME_ROUTE })}>
                <a onClick={e => history.push(ALUNOS_HOME_ROUTE)}>Alunos</a>
            </li>
            {/* <li className="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a>Home 1</a>
                    </li>
                    <li>
                        <a>Home 2</a>
                    </li>
                    <li>
                        <a>Home 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a>Contact</a>
            </li> */}
        </ul>
    </nav>
}

export default Sidebar;