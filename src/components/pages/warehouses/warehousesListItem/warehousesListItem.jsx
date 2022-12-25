import React         from 'react';

import ItemActions   from './itemActions/itemActions';
import ItemCard      from './itemCard/itemCard';

const WarehousesListItem = ({ warehouse, openDeleteModal, openUpdateModal }) => {
  return (
    <div className='warehouses__item-wrapper' key={warehouse.name}>
      <ItemCard warehouse={warehouse} />
      <ItemActions warehouse={warehouse} openDeleteModal={openDeleteModal} openUpdateModal= {openUpdateModal} />
    </div>
) }

export default WarehousesListItem;
