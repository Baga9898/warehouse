import React                  from 'react';
import { Link }               from 'react-router-dom';
import { useSelector }        from 'react-redux';

import { sidebarMenuItems }   from './sidebarMenuItems';

import './sidebarMenu.scss';

const SidebarMenu = () => {
    const sidebarIsOpen = useSelector(state => state.sidebarMenu.sidebarIsOpen);

    return (
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
    )
}

export default SidebarMenu;