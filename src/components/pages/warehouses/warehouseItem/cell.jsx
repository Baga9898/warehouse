import React                   from 'react';
import { createSelectable }    from 'react-selectable-fast';

const Cell = ({ selectableRef, isSelected, isSelecting, col, row }) => {
  isSelected && console.log(`${col}-${row}`);

  return (
    <td
      ref={selectableRef}
      style={{
        background: isSelected
          ? '#595959'
          : isSelecting
          ? '#adadad'
          : '',
        color: isSelected && '#fff'
      }}
    >
      {`${col}-${row}`}
    </td>
  );
}

export default createSelectable(Cell);