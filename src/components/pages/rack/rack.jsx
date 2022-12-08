import { faAngleUp }         from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo }      from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }   from '@fortawesome/react-fontawesome';
import React, { useState }   from 'react';

import './rack.scss';

const Rack = ({ rack }) => {
    const [isAdvancedMenuOpen, setIsAdvancedMenuOpen] = useState(false);

    const switchAdvancedMenu = () => {
        setIsAdvancedMenuOpen(!isAdvancedMenuOpen);
    };

    return (
        rack ? (
            <div className='rackModal__body'>
                <div className={'rackModal__advanced ' + (isAdvancedMenuOpen ? 'open' : '')}>
                    <button onClick={() => switchAdvancedMenu()}>
                        <FontAwesomeIcon icon={isAdvancedMenuOpen ? faAngleUp : faCircleInfo} className='rackModal__icon'/>
                    </button>
                    <div className='rackModal__advanced-info'>
                        <p><span>Name: </span>{rack.name}</p>
                        <p><span>Section: </span>{rack.section}</p>
                        <p><span>Category: </span>{rack.category}</p>
                        <p><span>Leftovers: </span>{`${rack.leftovers}/${rack.capacity}`}</p>
                    </div>
                </div>
                <div className='rackModal__shelves'>
                    {rack.shelves.map((shelve) => (
                        <div className='shelve'>{shelve}</div>
                    )) }
                </div>
            </div>
        ) : (
            <div className='rackModal__body'>Create rack form here</div>
        )
    );
}

export default Rack;