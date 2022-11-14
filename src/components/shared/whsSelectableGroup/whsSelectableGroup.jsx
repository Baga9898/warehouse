import { SelectableGroup }   from 'react-selectable-fast';
import React                 from 'react';

const WHSSelectableGroup = ({ children, handleSelectionFinish, currentMode }) => {
  return (
    <SelectableGroup
        className={'main '  + (currentMode === 'Delete'
                ? 'delete' : currentMode === 'Edit' 
                ? 'edit' : '')
        }
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