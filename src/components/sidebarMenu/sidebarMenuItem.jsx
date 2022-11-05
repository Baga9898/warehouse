import React from 'react';
import { NavLink }               from 'react-router-dom';

const SidebarMenuItem = ({ item }) => {
  return (
    <NavLink to={item.path} className='sidebar__item' >
        <div>{item.icon}</div>
        <p>{item.title}</p>
    </NavLink>
  )
}

export default SidebarMenuItem;