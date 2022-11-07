import React from "react";
import { createSelectable } from "react-selectable-fast";

function Box(props) {
  const { selectableRef, isSelected, isSelecting } = props;
  return (
    <td
      ref={selectableRef}
      style={{
        background: isSelected
          ? '#595959'
          : isSelecting
          ? '#adadad'
          : ''
      }}
    ></td>
  );
}

export default createSelectable(Box);