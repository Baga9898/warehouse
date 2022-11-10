import { createSelectable }    from 'react-selectable-fast';
import React                   from 'react';

const Cell = ({ selectableRef, isSelected, isSelecting, col, row, filled }) => {
  return (
    <td 
      className={isSelected || filled 
        ? 'isSelected' : isSelecting 
        ? 'isSelecting' : ''
      }
      ref={selectableRef}
    >
      {`${col}-${row}`}
    </td>
  );
}

export default createSelectable(Cell);