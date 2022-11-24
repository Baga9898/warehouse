import { faXmark }           from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }   from '@fortawesome/react-fontawesome';
import React                 from 'react';

import './modalWindow.scss';

const ModalWindow = ({ open, onClose, actionName, children, footerContent }) => { 
    return (
        <div className={'modal__background ' + (open ? 'open' : '')} onClick={onClose}>
            <div className='modal__wrapper ' onClick={(e) => e.stopPropagation()}>
                <div className='modal__header'>
                    <h3>{actionName}</h3>
                    <button onClick={onClose}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className='modal__body'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;