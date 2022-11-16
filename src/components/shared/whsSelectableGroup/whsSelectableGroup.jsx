import { SelectableGroup }                  from 'react-selectable-fast';
import { useSelector, useDispatch }         from 'react-redux';
import React                                from 'react';

import * as MODES from '../modeSelect/selectModes';

import { deleteRacks, setWarehouseRacks }   from '../../../api/requests/warehouses';

const WHSSelectableGroup = ({ children }) => {
  const dispatch = useDispatch();
  const currentMode = useSelector(state => state.warehouse.mode);
  const currentWarehouseId = useSelector(state => state.warehouse.currentWarehouseId);

  const isCreateMode = currentMode === MODES.createMode;
  const isDeleteMode = currentMode === MODES.deleteMode;
  const isEditMode   = currentMode === MODES.editMode;

  const handleSelectionFinish = (items) => {
    const selectedRacks = items.map(cell => `${cell.props.col}-${cell.props.row}`);

    if (isCreateMode) {
      dispatch(setWarehouseRacks(currentWarehouseId, selectedRacks));
    } else if (isDeleteMode) {
      dispatch(deleteRacks(currentWarehouseId, selectedRacks))
    } else {
      return;
    }
  };
  
  return (
    <SelectableGroup
        className={'main '  + (isDeleteMode
                ? 'delete' : isEditMode 
                ? 'edit' : '')
        }
        disabled={false}
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