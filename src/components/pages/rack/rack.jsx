import { faAngleUp }         from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo }      from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }   from '@fortawesome/react-fontawesome';
import React, { useState }   from 'react';
import FormInput from '../../shared/formInput/formInput';

import './rack.scss';

const Rack = ({ rack }) => {
    const [isAdvancedMenuOpen, setIsAdvancedMenuOpen] = useState(false);
    const [shelveForm, setShelveForm] = useState({name: ''});

    const switchAdvancedMenu = () => {
        setIsAdvancedMenuOpen(!isAdvancedMenuOpen);
    };

    const changeShalveName = () => {
        setShelveForm
    }

    return (
        rack ? (
            <div className='rackModal__body'>
                <div className={'rackModal__advanced ' + (isAdvancedMenuOpen ? 'open' : '')}>
                    <button onClick={() => switchAdvancedMenu()}>
                        <FontAwesomeIcon icon={isAdvancedMenuOpen ? faAngleUp : faCircleInfo} className='rackModal__icon'/>
                    </button>
                    <div className='rackModal__advanced-info'>
                        <p><span>Name: </span>{rack.name}</p>
                        <p><span>Section: </span>{rack.section}</p>
                        <p><span>Category: </span>{rack.category}</p>
                        <p><span>Leftovers: </span>{`${rack.leftovers}/${rack.capacity}`}</p>
                    </div>
                </div>
                <div className='rackModal__shelves'>
                    {rack.shelves.map((shelve) => (
                        <div key={shelve} className='shelve'>{shelve}</div>
                    )) }
                </div>
            </div>
        ) : (
            <div className='rackModal__body createShelve__form'>
                <FormInput 
                    label='name'
                    placeholder='shelve name'
                    changeFunction={setShelveForm}
                />
            </div>
        )
    );
}

export default Rack;