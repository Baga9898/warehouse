import { SelectableGroup }                  from 'react-selectable-fast';
import { useSelector, useDispatch }         from 'react-redux';
import React                                from 'react';

import { deleteRacks, setWarehouseRacks }   from '../../../api/requests/warehouses';

const WHSSelectableGroup = ({ children }) => {
  const dispatch = useDispatch();
  const currentMode = useSelector(state => state.warehouse.mode);
  const currentWarehouseId = useSelector(state => state.warehouse.currentWarehouseId);

  const handleSelectionFinish = (items) => {
    const selectedRacks = items.map(cell => `${cell.props.col}-${cell.props.row}`);

    if (currentMode === 'Create') {
      dispatch(setWarehouseRacks(currentWarehouseId, selectedRacks));
    } else if (currentMode === 'Delete') {
      dispatch(deleteRacks(currentWarehouseId, selectedRacks))
    } else {
      return;
    }
  };
  
  return (
    <SelectableGroup
        className={'main '  + (currentMode === 'Delete'
                ? 'delete' : currentMode === 'Edit' 
                ? 'edit' : '')
        }
        resetOnStart={true}
        tolerance={0}
        globalMouse={false}
        allowClickWithoutSelected={false}
        onSelectionFinish={handleSelectionFinish}
    >
        {children}
    </SelectableGroup>
  )
}

export default WHSSelectableGroup;