import React                   from 'react';
import Shelve from './shelve/shelve';

const RackShelves = ({ currentRackShelves }) => {
    return (
        <div className='rackModal__shelves'>
            {currentRackShelves.length !== 0 ? (
                currentRackShelves.map((shelve) => (
                    <Shelve shelve={shelve} />
            ))) : <p>oops, nothing seems to be<br/>here yet</p> }
        </div>
    );
}

export default RackShelves;