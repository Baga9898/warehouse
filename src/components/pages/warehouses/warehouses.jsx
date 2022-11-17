import { useDispatch, useSelector }   from 'react-redux';
import React, { useEffect }           from 'react';

import { getWarehouses }              from './../../../api/requests/warehouses';
import WarehousesList                 from './warehousesList';

import './warehouses.scss';

const Warehouses = () => {
    
    const dispatch = useDispatch();
    const warehouses = useSelector(state => state.warehouse.warehouses);
  
    useEffect(() => {
        dispatch(getWarehouses());
    }, [])

    return (
        <section className='warehouses'>
            <div>
                <h1>Warehouses</h1>
                <div>
                    <button>+</button>
                </div>
            </div>
            <WarehousesList warehouses={warehouses}/>
        </section>
    )
}

export default Warehouses;