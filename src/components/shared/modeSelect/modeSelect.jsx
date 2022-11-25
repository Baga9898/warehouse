import { useDispatch, useSelector }              from 'react-redux';
import React, { useRef, useState, useEffect }    from 'react';

import * as MODES                                from './selectModes';

import './modeSelect.scss';

const ModeSelect = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    const currentItem = useSelector(state => state.warehouse.mode);
    const selectModeRef = useRef();
    const dispatch = useDispatch();

    const handleOutsideClick = (e) => {
        if (!e.path.includes(selectModeRef.current)) {
            setMenuIsVisible(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, [])

    const setMode = (item) => {
        dispatch({ type: 'SET_MODE', payload: item})
    }

    const showMode = () => {
        setMenuIsVisible(!menuIsVisible);
    }

    return (
        <div ref={selectModeRef} className={'mode-select__wrapper ' + (menuIsVisible ? 'open' : '')} onClick={showMode}>
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