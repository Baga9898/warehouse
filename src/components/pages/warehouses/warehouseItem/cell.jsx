import { createSelectable }    from 'react-selectable-fast';
import { useDispatch }         from 'react-redux';
import { useParams }           from 'react-router-dom';
import { useSelector }         from 'react-redux';
import React                   from 'react';

import { getChosenCell }       from './../../../../api/requests/rack';
import * as MODES              from '../../../shared/modeSelect/selectModes';

const Cell = ({ selectableRef, isSelecting, col, row, filled, setIsRackModalOpen }) => {
  const currentMode = useSelector(state => state.warehouse.mode);
  const {id} = useParams();
  const dispatch = useDispatch();
  const cellColor = filled ? 'isSelected' : isSelecting ? 'isSelecting' : '';

  const openChosenCell = (cell) => {
    dispatch(getChosenCell(cell, id));
    setIsRackModalOpen(true);
  }

  return (
    <td 
      className={cellColor}
      ref={selectableRef}
      onClick={() => openChosenCell(`${col}-${row}`)}
    >
      {currentMode !== MODES.editMode && `${col}-${row}`}
    </td>
  );
}

export default createSelectable(Cell);