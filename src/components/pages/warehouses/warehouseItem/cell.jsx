import { createSelectable }    from 'react-selectable-fast';
import { useSelector }         from 'react-redux';
import React                   from 'react';

const Cell = ({ selectableRef, isSelected, isSelecting, col, row, filled }) => {
  const currentMode = useSelector(state => state.warehouse.mode);

  return (
    <td 
      className={isSelected || filled 
        ? 'isSelected' : isSelecting 
        ? 'isSelecting' : ''
      }
      ref={selectableRef}
    >
      {currentMode !== 'Edit' && `${col}-${row}`}
    </td>
  );
}

export default createSelectable(Cell);