import { useDispatch }       from 'react-redux';
import React, { useState }   from 'react';

import { addRack }           from '../../../api/requests/rack';
import * as INTL             from '../../../utils/texts';
import CreateModalTemplate   from './createModalTemplate';

const CreateRackModal = ({ warehouseId, currentRackNum }) => {
    const dispatch = useDispatch();
    const [rackForm, setRackForm] = useState({ 
        cell: '',
        name: '',
        capacity: '',
        leftovers: 0,
        category: '',
        section: '',
        warehouseId: warehouseId,
    });

    const setDefaultForm = () => {
        setRackForm({ 
            cell: '',
            name: '',
            capacity: '',
            leftovers: 0,
            category: '',
            section: '',
            warehouseId: warehouseId,
        });
    }

    const createRack = () => {
        dispatch(addRack(currentRackNum, rackForm));
        setDefaultForm();
    }

    const closeRackModal = () => {
        dispatch({ type: 'SET_IS_RACK_MODAL_OPEN', payload: false });
        setDefaultForm();
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
            placeholder: '0', 
            changeFunction: (e) => setRackForm({ ...rackForm, capacity: +e.target.value }), 
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

    return (
        <CreateModalTemplate 
            inputsArray={rackFormData} 
            firstFunction={closeRackModal}
            secondFunction={createRack}
            firstButtonText={INTL.cancel}
            secondButtonText={INTL.createAction}
        />
    )
}

export default CreateRackModal;