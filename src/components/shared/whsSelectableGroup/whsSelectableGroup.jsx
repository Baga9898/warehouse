import { SelectableGroup }   from 'react-selectable-fast';
import React                 from 'react';

import { 
    handleSelecting, 
    handleSelectionFinish,
}                            from '../../../utils/helpers/warehouse.helpers';

const WHSSelectableGroup = ({ children }) => {
  return (
    <SelectableGroup
        className="main"
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