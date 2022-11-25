import { useDispatch, useSelector }   from 'react-redux';
import React, { useState }            from 'react';

import * as MODES                     from './selectModes';

import './modeSelect.scss';

const ModeSelect = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    const currentItem = useSelector(state => state.warehouse.mode);
    const dispatch = useDispatch();

    const setMode = (item) => {
        dispatch({ type: 'SET_MODE', payload: item})
    }

    const showMode = () => {
        setMenuIsVisible(!menuIsVisible);
    }

    return (
        <div className={'mode-select__wrapper ' + (menuIsVisible ? 'open' : '')} onClick={showMode}>
            <p>Mode: <span>{currentItem}</span></p>
            <ul>
                {MODES.allModes.map(item => (
                    <li key={item} onClick={() => setMode(item)}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ModeSelect;