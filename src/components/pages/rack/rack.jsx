import { faAngleUp, faPlus }   from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo }        from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }     from '@fortawesome/react-fontawesome';
import { useSelector }         from 'react-redux';
import React, { useState }     from 'react';

import CreateRackModal         from '../../shared/modals/CreateRackModal';
import CreateShelveModal       from '../../shared/modals/createShelveModal';
import RackShelves             from './rackShelves';

import './rack.scss';

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
                <div className={'rackModal__advanced ' + (isAdvancedMenuOpen ? 'open' : '')}>
                    {/* Объединить все кнопки действий в один компонент. */}
                    <button onClick={() => switchAdvancedMenu()} className='rackModal__advanced-infoButton'>
                        <FontAwesomeIcon 
                            icon={isAdvancedMenuOpen ? faAngleUp : faCircleInfo} 
                            className='rackModal__icon'
                            title='Rack info'
                        />
                    </button>
                    <button onClick={() => setAddMode()} className='rackModal__advanced-addButton'>
                        <FontAwesomeIcon 
                            icon={faPlus} 
                            className='rackModal__icon'
                            title='Add shelve'
                        />
                    </button>
                    {/* Заменить на компонент. */}
                    <div className='rackModal__advanced-info'>
                    {/* Изменить информацию на более актуальную. */}
                        <p><span>Name: </span>{rack.name}</p>
                        <p><span>Section: </span>{rack.section}</p>
                        <p><span>Category: </span>{rack.category}</p>
                        <p><span>Leftovers: </span>{`${rack.leftovers}/${rack.capacity}`}</p>
                    </div>
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