import { faAngleUp, faPlus }   from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo }        from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }     from '@fortawesome/react-fontawesome';
import { useSelector }         from 'react-redux';
import React, { useState }     from 'react';

import * as INTL               from '../../../utils/texts';
import FormFooter              from '../warehouses/warehouseForms/formFooter/formFooter';
import FormInput               from '../../shared/formInput/formInput';

import './rack.scss';

const Rack = ({ rack, closeRackModal }) => {
    const [isAdvancedMenuOpen, setIsAdvancedMenuOpen] = useState(false);
    const [isAddMode, setIsAddMode] = useState(false);
    const [shelveForm, setShelveForm] = useState({ name: '' });
    const currentRackNum = useSelector(state => state.rack.currentRackNum);

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
        console.log(currentRackNum, shelveForm);
        setDefaultForm();
    }

    const closeModal = () => {
        closeRackModal();
        setDefaultForm();
    }

    const setEditMode = () => {
        setIsAddMode(true);
    }

    return (
        rack ? (
            <div className='rackModal__body'>
                <div className={'rackModal__advanced ' + (isAdvancedMenuOpen ? 'open' : '')}>
                    <button onClick={() => switchAdvancedMenu()} className='rackModal__advanced-infoButton'>
                        <FontAwesomeIcon 
                            icon={isAdvancedMenuOpen ? faAngleUp : faCircleInfo} 
                            className='rackModal__icon'
                            title='Rack info'
                        />
                    </button>
                    <button onClick={() => setEditMode()} className='rackModal__advanced-addButton'>
                        <FontAwesomeIcon 
                            icon={faPlus} 
                            className='rackModal__icon'
                            title='Add shelve'
                        />
                    </button>
                    <div className='rackModal__advanced-info'>
                        <p><span>Name: </span>{rack.name}</p>
                        <p><span>Section: </span>{rack.section}</p>
                        <p><span>Category: </span>{rack.category}</p>
                        <p><span>Leftovers: </span>{`${rack.leftovers}/${rack.capacity}`}</p>
                    </div>
                </div>
                { isAddMode && (
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
                ) }
                <div className='rackModal__shelves'>
                    {/* {rack.shelves.map((shelve) => (
                        <div key={shelve} className='shelve'>{shelve}</div>
                    )) } */}
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