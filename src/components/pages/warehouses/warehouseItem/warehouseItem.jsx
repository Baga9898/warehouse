import { useDispatch }         from 'react-redux';
import { useParams }           from 'react-router-dom';
import React, { useEffect }    from 'react';

import { getWarehouseRacks }   from '../../../../api/requests/warehouses';
import ModeSelect              from '../../../shared/modeSelect/modeSelect';
import WarehouseTable          from './warehouseTable';
import WHSSelectableGroup      from '../../../shared/whsSelectableGroup/whsSelectableGroup';

import './warehouseItem.scss';

const WarehouseItem = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch({ type: 'SET_DEFAULT_WAREHOUSE' });
        dispatch(getWarehouseRacks(id));
    }, [])

    return (
    <section className='warehouseItem'>
        <div className='page__header'>
            <h1>warehouseItem</h1>
            <div>
                <ModeSelect items={[ 'Create', 'Delete', 'Edit' ]}/>
            </div>
        </div>
        <div className='warehouseItem__table_wrapper'>
            <WHSSelectableGroup>
                <WarehouseTable />
            </WHSSelectableGroup>
        </div>
    </section>
    )
}

export default WarehouseItem;