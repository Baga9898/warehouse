import { faAngleUp }         from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo }      from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }   from '@fortawesome/react-fontawesome';
import React, { useState }   from 'react';

import * as INTL             from '../../../utils/texts';
import FormFooter            from '../warehouses/warehouseForms/formFooter/formFooter';
import FormInput             from '../../shared/formInput/formInput';

import './rack.scss';

const Rack = ({ rack, closeRackModal }) => {
    const [isAdvancedMenuOpen, setIsAdvancedMenuOpen] = useState(false);
    const [shelveForm, setShelveForm] = useState({ name: '' });

    const setDefaultForm = () => {
        setShelveForm({ name: '' });
    }

    const switchAdvancedMenu = () => {
        setIsAdvancedMenuOpen(!isAdvancedMenuOpen);
    };

    const changeShalveName = (e) => {
        setShelveForm({ ...shelveForm, name: e.target.value });
    }

    const createShelve = () => {
        console.log(shelveForm);
        setDefaultForm();
    }

    const closeModal = () => {
        closeRackModal();
        setDefaultForm();
    }

    return (
        rack ? (
            <div className='rackModal__body'>
                <div className={'rackModal__advanced ' + (isAdvancedMenuOpen ? 'open' : '')}>
                    <button onClick={() => switchAdvancedMenu()}>
                        <FontAwesomeIcon icon={isAdvancedMenuOpen ? faAngleUp : faCircleInfo} className='rackModal__icon'/>
                    </button>
                    <div className='rackModal__advanced-info'>
                        <p><span>Name: </span>{rack.name}</p>
                        <p><span>Section: </span>{rack.section}</p>
                        <p><span>Category: </span>{rack.category}</p>
                        <p><span>Leftovers: </span>{`${rack.leftovers}/${rack.capacity}`}</p>
                    </div>
                </div>
                <div className='rackModal__shelves'>
                    {rack.shelves.map((shelve) => (
                        <div key={shelve} className='shelve'>{shelve}</div>
                    )) }
                </div>
            </div>
        ) : (
            <>
                <div className='rackModal__body createShelve__form'>
                    <FormInput 
                        label='name'
                        placeholder='shelve name'
                        changeFunction={(e) => changeShalveName(e)}
                        value={shelveForm.name}
                    />
                </div>
                <FormFooter
                    firstFunction={closeModal}
                    secondFunction={createShelve}
                    firstButtonText={INTL.cancel}
                    secondButtonText={INTL.createAction}
                />
            </>
        )
    );
}

export default Rack;