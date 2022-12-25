import React             from 'react';

import CreateRackModal   from '../../shared/modals/createRackModal/сreateRackModal';
import RackInfoModal     from '../../shared/modals/rackInfoModal/rackInfoModal';

import './rack.scss';

const Rack = ({ rack, warehouseId }) => {
    return (
        rack ? (
            <RackInfoModal rack={rack} warehouseId={warehouseId} />
        ) : (
            <CreateRackModal warehouseId={warehouseId} />
        )
    );
}

export default Rack;