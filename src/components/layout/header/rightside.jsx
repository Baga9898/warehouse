import React                 from 'react';
import { FontAwesomeIcon }   from '@fortawesome/react-fontawesome';
import { faUser }            from '@fortawesome/free-solid-svg-icons';

const Rightside = () => {
    return (
        <div>
            <FontAwesomeIcon className='header__profile-icon' icon={faUser} />
        </div>
    )
}

export default Rightside;