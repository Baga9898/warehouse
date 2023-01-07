import React from 'react';

import ShelveActions from '../shelveActions/shelveActions';

const Shelve = ({ shelve }) => {
    return (
        <div key={shelve.shelve} className='shelve'>
            {shelve.shelve}
            <ShelveActions />
        </div>
    )
}

export default Shelve;