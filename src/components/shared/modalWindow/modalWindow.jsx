import { createPortal }                from 'react-dom';
import { faXmark }                     from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }             from '@fortawesome/react-fontawesome';
import React, { useEffect, useMemo }   from 'react';

import './modalWindow.scss';

const modalRootElement = document.querySelector('#modal');

const ModalWindow = ({ open, onClose, actionName, children, footerContent }) => { 
    const element = useMemo(() => document.createElement('div'), []);

    useEffect(() => {
        modalRootElement.appendChild(element);

        return () => {
            modalRootElement.removeChild(element);
        };
    });

    if (open) {
        return createPortal(
            <div className='modal__background' onClick={onClose}>
                <div className='modal__wrapper'>
                    <div className='modal__header'>
                        <h3>{actionName}</h3>
                        <button onClick={onClose}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                    <div className='modal__body'>
                        {children}
                    </div>
                    <div className={'modal__footer'}>
                        {footerContent}
                    </div>
                </div>
            </div>, element
        );
    }

    return null;
}

export default ModalWindow;