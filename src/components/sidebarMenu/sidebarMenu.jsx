import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { sidebarMenuItems } from './sidebarMenuItems';
import './sidebarMenu.scss';

const SidebarMenu = () => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

    const openCloseSidebar = () => {
        setSidebarIsOpen(!sidebarIsOpen);
    }

    return (
        <>
        <button style={{position: 'absolute', left: '50%'}} onClick={openCloseSidebar}>open/close</button>
        <div className={sidebarIsOpen? 'sidebar active' : 'sidebar'}>
            {sidebarMenuItems.map(item => (
                <div className='sidebar__section' key={item.section}>
                    <h3>{item.section}</h3>
                    <ul>
                        {item.items.map(item => (
                            <Link key={item.path} to={item.path} className='sidebar__item'>
                                <div>{item.icon}</div>
                                <p>{item.title}</p>
                            </Link>
                        ))}
                    </ul>
                    <div className='sidebar__devider'></div>
                </div>
            ))}
        </div>
        </>
    )
}

export default SidebarMenu;