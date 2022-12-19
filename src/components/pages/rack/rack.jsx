import { faAngleUp, faPlus }          from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo }               from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }            from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector }   from 'react-redux';
import React, { useState }            from 'react';

import { addRack }                    from '../../../api/requests/rack';
import { addShelve }                  from '../../../api/requests/shelve';
import * as INTL                      from '../../../utils/texts';
import FormFooter                     from '../warehouses/warehouseForms/formFooter/formFooter';
import ModalInputsList                from './../../shared/modalInputsList/modalInputsList';

import './rack.scss';

const Rack = ({ rack, closeRackModal, warehouseId }) => {
    const [isAdvancedMenuOpen, setIsAdvancedMenuOpen] = useState(false);
    const [isAddMode, setIsAddMode] = useState(false);
    const [rackForm, setRackForm] = useState({ 
        cell: '',
        name: '',
        capacity: 0,
        leftovers: 0,
        category: '',
        section: '',
        warehouseId: warehouseId,
    });
    const [shelveForm, setShelveForm] = useState({
        shelve: '',
        name: '',
        capacity: '',
        leftovers: 0,
        rackId: '',
        warehouseId: warehouseId,
    });
    const currentRackNum = useSelector(state => state.racks.currentRackNum);
    const currentRackShelves = useSelector(state => state.shelve.currentRackShelves);
    const dispatch = useDispatch();

    const setDefaultForm = () => {
        setRackForm({ 
            cell: '',
            name: '',
            capacity: 0,
            leftovers: 0,
            category: '',
            section: '',
            warehouseId: warehouseId,
        });
    }

    const setDefaultShelveForm = () => {
        setShelveForm({
            shelve: '',
            name: '',
            capacity: '',
            leftovers: 0,
            rackId: '',
            warehouseId: warehouseId,
        });
    }

    const switchAdvancedMenu = () => {
        setIsAdvancedMenuOpen(!isAdvancedMenuOpen);
    };

    const createRack = () => {
        dispatch(addRack(currentRackNum, rackForm));
        setDefaultForm();
    }

    const createShelve = () => {
        dispatch(addShelve(currentRackNum, warehouseId, shelveForm));
        setDefaultShelveForm();
    }

    const closeModal = () => {
        closeRackModal();
        setDefaultForm();
    }

    const setAddMode = () => {
        setIsAddMode(!isAddMode);
    }

    const rackFormData = [
        {
            label: INTL.nameLabel, 
            placeholder: 'rack name', 
            changeFunction: (e) => setRackForm({ ...rackForm, name: e.target.value }), 
            value: rackForm.name,
        },
        {
            label: 'capacity', 
            placeholder: 'capacity', 
            changeFunction: (e) => setRackForm({ ...rackForm, capacity: e.target.value }), 
            value: rackForm.capacity,
        },
        {
            label: 'category', 
            placeholder: 'category', 
            changeFunction: (e) => setRackForm({ ...rackForm, category: e.target.value }), 
            value: rackForm.category,
        },
        {
            label: 'section', 
            placeholder: 'section', 
            changeFunction: (e) => setRackForm({ ...rackForm, section: e.target.value }), 
            value: rackForm.section,
        }, 
    ];

    const shelveFormData = [
        {
            label: INTL.nameLabel, 
            placeholder: 'shelve name', 
            changeFunction: (e) => setShelveForm({ ...shelveForm, name: e.target.value }), 
            value: shelveForm.name,
        },
        {
            label: 'capacity', 
            placeholder: '0', 
            changeFunction: (e) => setShelveForm({ ...shelveForm, capacity: +e.target.value }), 
            value: shelveForm.capacity,
        },
    ];

    return (
        rack ? (
            <div className='rackModal__body'>
                <div className={'rackModal__advanced ' + (isAdvancedMenuOpen ? 'open' : '')}>
                    {/* Объединить все кнопки действий в один компонент. */}
                    <button onClick={() => switchAdvancedMenu()} className='rackModal__advanced-infoButton'>
                        <FontAwesomeIcon 
                            icon={isAdvancedMenuOpen ? faAngleUp : faCircleInfo} 
                            className='rackModal__icon'
                            title='Rack info'
                        />
                    </button>
                    <button onClick={() => setAddMode()} className='rackModal__advanced-addButton'>
                        <FontAwesomeIcon 
                            icon={faPlus} 
                            className='rackModal__icon'
                            title='Add shelve'
                        />
                    </button>
                    {/* Заменить на компонент. */}
                    <div className='rackModal__advanced-info'>
                    {/* Изменить информацию на более актуальную. */}
                        <p><span>Name: </span>{rack.name}</p>
                        <p><span>Section: </span>{rack.section}</p>
                        <p><span>Category: </span>{rack.category}</p>
                        <p><span>Leftovers: </span>{`${rack.leftovers}/${rack.capacity}`}</p>
                    </div>
                </div>
                { isAddMode && (
                    <>
                        <ModalInputsList inputsArray={shelveFormData} />
                        <FormFooter
                            firstFunction={closeModal}
                            secondFunction={createShelve}
                            firstButtonText={INTL.cancel}
                            secondButtonText={INTL.createAction}
                        />
                    </>
                ) }
                {/* Заменить на компонент. */}
                <div className='rackModal__shelves'>
                {/* Сделать запрос на апишку стеллажей. */}
                    {currentRackShelves.length !== 0 ? (
                        currentRackShelves.map((shelve) => (
                            <div key={shelve.shelve} className='shelve'>{shelve.shelve}</div>
                    ))) : <p>oops, nothing seems to be<br/>here yet</p> }
                </div>
            </div>
        ) : (
            <>
                <ModalInputsList inputsArray={rackFormData} />
                <FormFooter
                    firstFunction={closeModal}
                    secondFunction={createRack}
                    firstButtonText={INTL.cancel}
                    secondButtonText={INTL.createAction}
                />
            </>
        )
    );
}

export default Rack;