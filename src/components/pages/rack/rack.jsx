import React from 'react';

import './rack.scss';

const Rack = ({ rack }) => {
    return (
        rack ? (
            <div>
                <p>{rack.cell}</p>
                <p>{rack.section}</p>
                <p>{rack.category}</p>
                <p>{`${rack.capacity}/${rack.leftovers}`}</p>
            </div>
        ) : (
            <div>Create Rack</div>
        )
    );
}

export default Rack;