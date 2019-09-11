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

    const { pathname } = window.location;

    return <nav {...rest} id="sidebar" className={`${rest.className || ''} ${sidebarActive ? 'active' : ''}`.trim()}>
        <div className="sidebar-header">
            <a href="/" className="display-4 text-white d-flex justify-content-center" style={{ fontSize: 40 }}><strong>Warrior</strong></a>
        </div>
        <ul className="list-unstyled components">
            {/* <p>{nomeEmpresa}</p> */}
            <li className={classNames({ active: pathname === '/' })}>
                <a onClick={e => history.push('/')}>Home</a>
            </li>
            <li className={classNames({ active: pathname === ALUNOS_HOME_ROUTE })}>
                <a onClick={e => history.push(ALUNOS_HOME_ROUTE)}>Alunos</a>
            </li>
        </ul>
    </nav>
}

export default Sidebar;