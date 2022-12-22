import { useSelector }         from 'react-redux';
import React, { useState }     from 'react';

import CreateRackModal         from '../../shared/modals/CreateRackModal';
import CreateShelveModal       from '../../shared/modals/createShelveModal';
import RackActions             from './rackActions';
import RackInfo                from './rackInfo';
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
                <RackActions 
                    isAdvancedMenuOpen={isAdvancedMenuOpen} 
                    setAddMode={setAddMode} 
                    switchAdvancedMenu={switchAdvancedMenu} 
                />
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