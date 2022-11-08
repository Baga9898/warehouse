import { faUser }            from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }   from '@fortawesome/react-fontawesome';
import React                 from 'react';

const Rightside = () => {
    return (
        <div>
            <FontAwesomeIcon className='header__profile-icon' icon={faUser} />
        </div>
    )
}

export default Rightside;