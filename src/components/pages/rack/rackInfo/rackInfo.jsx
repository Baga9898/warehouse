import React from 'react';

const RackInfo = ({ rack, isAdvancedMenuOpen }) => {
    return (
        <div className={'rackModal__advanced ' + (isAdvancedMenuOpen ? 'open' : '')}>
            <div className='rackModal__advanced-info'>
                <p><span>Name: </span>{rack.name}</p>
                <p><span>Section: </span>{rack.section}</p>
                <p><span>Category: </span>{rack.category}</p>
                <p><span>Leftovers: </span>{`${rack.leftovers}/${rack.capacity}`}</p>
            </div>
        </div>
    )
}

export default RackInfo;