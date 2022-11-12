import React, { useState } from 'react';

import './modeSelect.scss'

const ModeSelect = ({ items }) => {
    const [currentItem, setCurrentItem] = useState(items[0]);
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    const setMode = (item) => {
        setCurrentItem(item);
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
                        <li onClick={() => setMode(item)}>{item}</li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default ModeSelect;