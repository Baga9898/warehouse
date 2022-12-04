import { createSelectable }    from 'react-selectable-fast';
import { useSelector }         from 'react-redux';
import React                   from 'react';

import * as MODES              from '../../../shared/modeSelect/selectModes';

const Cell = ({ selectableRef, isSelecting, col, row, filled }) => {
  const currentMode = useSelector(state => state.warehouse.mode);
  const cellColor = filled ? 'isSelected' : isSelecting ? 'isSelecting' : '';

  return (
    <td 
      className={cellColor}
      ref={selectableRef}
    >
      {currentMode !== MODES.editMode && `${col}-${row}`}
    </td>
  );
}

export default createSelectable(Cell);