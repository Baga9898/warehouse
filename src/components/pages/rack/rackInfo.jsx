import React from 'react';

const RackInfo = ({ rack }) => {
    return (
        <div className='rackModal__advanced-info'>
            <p><span>Name: </span>{rack.name}</p>
            <p><span>Section: </span>{rack.section}</p>
            <p><span>Category: </span>{rack.category}</p>
            <p><span>Leftovers: </span>{`${rack.leftovers}/${rack.capacity}`}</p>
        </div>
    )
}

export default RackInfo;