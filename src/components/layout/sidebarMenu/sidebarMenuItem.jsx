import React         from 'react';
import { NavLink }   from 'react-router-dom';
import { useDispatch } from 'react-redux';


const SidebarMenuItem = ({ item }) => {
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' });
  }

  return (
    <NavLink to={item.path} className='sidebar__item' onClick={closeSidebar}>
        <div>{item.icon}</div>
        <p>{item.title}</p>
    </NavLink>
  )
}

export default SidebarMenuItem;