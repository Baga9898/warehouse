import React                 from 'react';
import { Link }              from "react-router-dom";
import { useDispatch }       from 'react-redux';
import { FontAwesomeIcon }   from '@fortawesome/react-fontawesome';
import { faBars }            from '@fortawesome/free-solid-svg-icons';

const Leftside = () => {
    const dispatch = useDispatch();

    const openCloseSidebar = () => {
        dispatch({type: 'OPEN_CLOSE_SIDEBAR'});
    }

    return (
        <div className='header__leftside'>
            <FontAwesomeIcon className='header__menu-icon' icon={faBars} onClick={openCloseSidebar} />
            <Link to='/'>
            <div className='header__logo'>WHS</div>
            </Link>
        </div>
    )
}

export default Leftside;