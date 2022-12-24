import { useSelector }       from 'react-redux';
import React, { useState }   from 'react';

import CreateShelveModal     from './../createShelveModal';
import RackActions           from './../../../pages/rack/rackActions';
import RackInfo              from './../../../pages/rack/rackInfo';
import RackShelves           from './../../../pages/rack/rackShelves';

const RackInfoModal = ({ rack, warehouseId }) => {
    const currentRackShelves = useSelector(state => state.shelve.currentRackShelves);
    const currentRackNum = useSelector(state => state.racks.currentRackNum);
    
    const [isAdvancedMenuOpen, setIsAdvancedMenuOpen] = useState(false);
    const [isAddMode, setIsAddMode] = useState(false);

    const switchAdvancedMenu = () => {
        setIsAdvancedMenuOpen(!isAdvancedMenuOpen);
    };

    const setAddMode = () => {
        setIsAddMode(!isAddMode);
    }

    return (
        <div className='rackModal__body'>
            <RackActions 
                isAdvancedMenuOpen={isAdvancedMenuOpen} 
                setAddMode={setAddMode} 
                switchAdvancedMenu={switchAdvancedMenu} 
            />
            <RackInfo rack={rack} isAdvancedMenuOpen={isAdvancedMenuOpen} />
            { isAddMode && 
                <CreateShelveModal 
                    warehouseId={warehouseId} 
                    currentRackNum={currentRackNum} 
                /> 
            }
            <RackShelves currentRackShelves={currentRackShelves}/>
        </div>
    )
}

export default RackInfoModal;