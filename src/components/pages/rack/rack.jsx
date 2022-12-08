import React from 'react';

import './rack.scss';

const Rack = ({ rack }) => {
    return (
        rack ? (
            <>
                <>
                    <button>Info</button>
                    <div className='rackModal__body'>
                        <p><span>Name: </span>{rack.name}</p>
                        <p><span>Section: </span>{rack.section}</p>
                        <p><span>Category: </span>{rack.category}</p>
                        <p><span>Leftovers: </span>{`${rack.leftovers}/${rack.capacity}`}</p>
                    </div>
                </>
                <div>
                    {rack.shelves.map((shelve) => shelve)}
                </div>
            </>
        ) : (
            <>
                <div className='rackModal__body'>Create Rack</div>
            </>
        )
    );
}

export default Rack;