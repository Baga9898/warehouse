import { faWarehouse }       from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }   from '@fortawesome/react-fontawesome';
import { Link }              from 'react-router-dom';
import React                 from 'react';

import { Paths }             from '../../../../api/constants';

const ItemCard = ({ warehouse }) => {
    return (
        <Link to={`${Paths.warehouses}/${warehouse.id}`}>
            <div className='warehouses__item'>
                <div className={'warehouses__item-overlay ' + (warehouse.leftovers > warehouse.capacity ? 'a-lot-of' : '')}>
                    <FontAwesomeIcon icon={faWarehouse} />
                    <p>{warehouse.name}</p>
                    <span className='warehouses__item-leftovers'>
                        {`${warehouse.leftovers} / ${warehouse.capacity}`}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default ItemCard;