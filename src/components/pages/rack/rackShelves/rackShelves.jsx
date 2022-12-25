import React from 'react';

const RackShelves = ({ currentRackShelves }) => {
    return (
        <div className='rackModal__shelves'>
            {currentRackShelves.length !== 0 ? (
                currentRackShelves.map((shelve) => (
                    <div key={shelve.shelve} className='shelve'>{shelve.shelve}</div>
            ))) : <p>oops, nothing seems to be<br/>here yet</p> }
        </div>
    );
}

export default RackShelves;