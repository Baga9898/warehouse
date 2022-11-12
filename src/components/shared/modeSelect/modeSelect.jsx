import { useDispatch, useSelector }   from 'react-redux';
import React, { useState }            from 'react';

import './modeSelect.scss'

const ModeSelect = ({ items }) => {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    const dispatch = useDispatch();
    const currentItem = useSelector(state => state.warehouse.mode);

    const setMode = (item) => {
        dispatch({ type: 'SET_MODE', payload: item})
    }

    const showMode = () => {
        setMenuIsVisible(!menuIsVisible);
    }

    return (
        <div className='mode-select__wrapper' onClick={showMode}>
            <p>Mode: {currentItem}</p>
            {menuIsVisible &&
                <ul>
                    {items.map(item => (
                        <li key={item} onClick={() => setMode(item)}>{item}</li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default ModeSelect;