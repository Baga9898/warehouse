import React from 'react';

const WarehousesHeaderRightside = ({ setIsModalOpen }) => {
  return (
    <div>
        <button onClick={() => setIsModalOpen(true)}>+</button>
    </div>
  )
}

export default WarehousesHeaderRightside;