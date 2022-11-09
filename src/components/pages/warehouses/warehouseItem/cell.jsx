import { createSelectable }    from 'react-selectable-fast';
import React                   from 'react';

const Cell = ({ selectableRef, isSelected, isSelecting, col, row }) => {
  isSelected && console.log(`${col}-${row}`);

  return (
    <td 
      className={isSelected 
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