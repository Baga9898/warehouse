import { useSelector }        from 'react-redux';
import React                  from 'react';

import { sidebarMenuItems }   from './sidebarMenuItems';
import SidebarMenuSection     from './sidebarMenuSection';

import './sidebarMenu.scss';

const SidebarMenu = () => {
    const sidebarIsOpen = useSelector(state => state.sidebarMenu.sidebarIsOpen);

    return (
        <div className={sidebarIsOpen? 'sidebar active' : 'sidebar'}>
            {sidebarMenuItems.map(item => (
                <SidebarMenuSection key={item.section} item={item} />
            ))}
        </div>
    )
}

export default SidebarMenu;