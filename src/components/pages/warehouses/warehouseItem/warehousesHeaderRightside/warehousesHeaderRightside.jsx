import React from 'react';

import './warehouseHeaderRightside.scss';

const WarehousesHeaderRightside = ({ setIsModalOpen }) => {
  return (
    <div className='warehouseHeader'>
        <button className='warehouseHeader__createWarehouse' onClick={() => setIsModalOpen(true)}>+</button>
    </div>
  )
}

export default WarehousesHeaderRightside;