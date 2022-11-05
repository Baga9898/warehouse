import React from 'react';
import SidebarMenuItem from './sidebarMenuItem';

const SidebarMenuSection = ({ item }) => {
  return (
    <div className='sidebar__section'>
        <h3>{item.section}</h3>
        <ul>
            {item.items.map(item => (
                <SidebarMenuItem item={item} key={item.path} />
            ))}
        </ul>
        <div className='sidebar__devider'></div>
    </div>
  )
}

export default SidebarMenuSection;