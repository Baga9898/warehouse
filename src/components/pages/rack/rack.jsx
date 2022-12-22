import { faAngleUp, faPlus }   from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo }        from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }     from '@fortawesome/react-fontawesome';
import { useSelector }         from 'react-redux';
import React, { useState }     from 'react';

import CreateRackModal         from '../../shared/modals/CreateRackModal';
import CreateShelveModal       from '../../shared/modals/createShelveModal';
import RackShelves             from './rackShelves';

import './rack.scss';
import RackInfo from './rackInfo';

const Rack = ({ rack, warehouseId }) => {
    const [isAdvancedMenuOpen, setIsAdvancedMenuOpen] = useState(false);
    const [isAddMode, setIsAddMode] = useState(false);

    const currentRackNum = useSelector(state => state.racks.currentRackNum);
    const currentRackShelves = useSelector(state => state.shelve.currentRackShelves);

    const switchAdvancedMenu = () => {
        setIsAdvancedMenuOpen(!isAdvancedMenuOpen);
    };

    const setAddMode = () => {
        setIsAddMode(!isAddMode);
    }

    return (
        rack ? (
            <div className='rackModal__body'>
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
                <div className={'rackModal__advanced ' + (isAdvancedMenuOpen ? 'open' : '')}>
                    <RackInfo rack={rack} />
                </div>
                { isAddMode && <CreateShelveModal warehouseId={warehouseId} currentRackNum={currentRackNum} /> }
                <RackShelves currentRackShelves={currentRackShelves}/>
            </div>
        ) : (
            <CreateRackModal warehouseId={warehouseId} currentRackNum={currentRackNum} />
        )
    );
}

export default Rack;