import { faPencil, faTrash }   from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }     from '@fortawesome/react-fontawesome';
import React                   from 'react';

const RackShelves = ({ currentRackShelves }) => {
    return (
        <div className='rackModal__shelves'>
            {currentRackShelves.length !== 0 ? (
                currentRackShelves.map((shelve) => (
                    <div key={shelve.shelve} className='shelve'>
                        {shelve.shelve}
                        <div className='shelve__actions'>
                            <FontAwesomeIcon icon={faPencil} />
                            <FontAwesomeIcon icon={faTrash} />
                        </div>
                    </div>
            ))) : <p>oops, nothing seems to be<br/>here yet</p> }
        </div>
    );
}

export default RackShelves;