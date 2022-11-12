import { SelectableGroup }   from 'react-selectable-fast';
import { useSelector }       from 'react-redux';
import React                 from 'react';

import { 
    handleSelecting, 
    handleSelectionFinish,
}                            from '../../../utils/helpers/warehouse.helpers';

const WHSSelectableGroup = ({ children }) => {
  const selectMode = useSelector(state => state.warehouse.mode);
  
  return (
    <SelectableGroup
        className={'main '  + (selectMode === 'Delete'
                ? 'delete' : selectMode === 'Edit' 
                ? 'edit' : '')
        }
        clickClassName="tick"
        enableDeselect
        tolerance={0}
        globalMouse={false}
        allowClickWithoutSelected={false}
        duringSelection={handleSelecting}
        onSelectionFinish={handleSelectionFinish}
    >
        {children}
    </SelectableGroup>
  )
}

export default WHSSelectableGroup;