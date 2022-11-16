import { SelectableGroup }                  from 'react-selectable-fast';
import { useSelector, useDispatch }         from 'react-redux';
import React                                from 'react';

import { deleteRacks, setWarehouseRacks }   from '../../../api/requests/racks';
import * as MODES                           from '../modeSelect/selectModes';

const WHSSelectableGroup = ({ children }) => {
  const dispatch = useDispatch();
  const currentMode = useSelector(state => state.warehouse.mode);
  const currentWarehouse = useSelector(state => state.warehouse.currentWarehouse);

  const isCreateMode = currentMode === MODES.createMode;
  const isDeleteMode = currentMode === MODES.deleteMode;
  const isEditMode   = currentMode === MODES.editMode;

  const handleSelectionFinish = (items) => {
    const selectedRacks = items.map(cell => `${cell.props.col}-${cell.props.row}`);

    if (isCreateMode) {
      dispatch(setWarehouseRacks(currentWarehouse.id, selectedRacks));
    } else if (isDeleteMode) {
      dispatch(deleteRacks(currentWarehouse.id, selectedRacks));
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