import React from 'react'

interface ISidebarProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    sidebarActive:boolean;
    nomeEmpresa:string;
}

const Sidebar = (props:ISidebarProps) => {
    const {nomeEmpresa, sidebarActive,...rest} = props 
    return <nav {...rest} id="sidebar" className={`${rest.className || ''} ${sidebarActive ? 'active' : ''}`.trim()}>
        <div className="sidebar-header">
            <a href="/" className="display-4 text-white">Warrior</a>
        </div>
        <ul className="list-unstyled components">
            <p>{nomeEmpresa}</p>
            <li className="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a>Home 1</a>
                    </li>
                    <li>
                        <a href="google.com">Home 2</a>
                    </li>
                    <li>
                        <a>Home 3</a>
                    </li>
                </ul>
            </li>            
            <li>
                <a>Contact</a>
            </li>
        </ul>
    </nav>
} 

export default Sidebar;