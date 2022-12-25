import { useDispatch }       from 'react-redux';
import React, { useState }   from 'react';

import { addShelve }         from '../../../../api/requests/shelve';
import * as INTL             from '../../../../utils/texts';
import CreateModalTemplate   from '../createModalTemplate';

const CreateShelveModal = ({ warehouseId, currentRackNum }) => {
    const dispatch = useDispatch();
    const [shelveForm, setShelveForm] = useState({
        shelve: '',
        name: '',
        capacity: '',
        leftovers: 0,
        rackId: '',
        warehouseId: warehouseId,
    });

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

    const createShelve = () => {
        dispatch(addShelve(currentRackNum, warehouseId, shelveForm));
        setDefaultShelveForm();
    }

    const closeRackModal = () => {
        dispatch({ type: 'SET_IS_RACK_MODAL_OPEN', payload: false });
        setDefaultShelveForm();
    }

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
        <CreateModalTemplate 
            inputsArray={shelveFormData} 
            firstFunction={closeRackModal}
            secondFunction={createShelve}
            firstButtonText={INTL.cancel}
            secondButtonText={INTL.createAction}
        />
    )
}

export default CreateShelveModal;