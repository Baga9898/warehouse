import { faAngleUp, faPlus }   from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo }        from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }     from '@fortawesome/react-fontawesome';
import React                   from 'react';

const RackActions = ({ isAdvancedMenuOpen, setAddMode, switchAdvancedMenu }) => {
    return (
        <div className='rackModal__actions'>
            <button onClick={() => setAddMode()} className='rackModal__advanced-addButton'>
                <FontAwesomeIcon 
                    icon={faPlus} 
                    className='rackModal__icon'
                    title='Add shelve'
                />
            </button>
            <button onClick={() => switchAdvancedMenu()} className='rackModal__advanced-infoButton'>
                <FontAwesomeIcon 
                    icon={isAdvancedMenuOpen ? faAngleUp : faCircleInfo} 
                    className='rackModal__icon'
                    title='Rack info'
                />
            </button>
        </div>
    )
}

export default RackActions;