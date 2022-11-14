import { useDispatch, useSelector }         from 'react-redux';
import { useParams }                        from 'react-router-dom';
import React, { useEffect }                 from 'react';

import { deleteRacks, setWarehouseRacks }   from '../../../../api/requests/warehouses';
import { getWarehouseRacks }                from '../../../../api/requests/warehouses';
import ModeSelect                           from '../../../shared/modeSelect/modeSelect';
import WarehouseTable                       from './warehouseTable';
import WHSSelectableGroup                   from '../../../shared/whsSelectableGroup/whsSelectableGroup';

import './warehouseItem.scss';

const WarehouseItem = () => {
    const dispatch = useDispatch();
    const currentMode = useSelector(state => state.warehouse.mode);
    const {id} = useParams();

    useEffect(() => {
        dispatch({ type: 'SET_DEFAULT_WAREHOUSE' });
        dispatch({ type: 'SET_CURRENT_WAREHOUSE_ID', payload: id });
        dispatch(getWarehouseRacks(id));
    }, [])

    const handleSelectionFinish = (items) => {
        const selectedRacks = items.map(cell => `${cell.props.col}-${cell.props.row}`);
    
        if (currentMode === 'Create') {
          setWarehouseRacks(id, selectedRacks);
        } else if (currentMode === 'Delete') {
          dispatch(deleteRacks(id, selectedRacks))
        } else {
          return;
        }
      };

    return (
    <section className='warehouseItem'>
        <div className='page__header'>
            <h1>warehouseItem</h1>
            <div>
                <ModeSelect items={[ 'Create', 'Delete', 'Edit' ]}/>
            </div>
        </div>
        <div className='warehouseItem__table_wrapper'>
            <WHSSelectableGroup handleSelectionFinish={handleSelectionFinish} currentMode={currentMode}>
                <WarehouseTable />
            </WHSSelectableGroup>
        </div>
    </section>
    )
}

export default WarehouseItem;