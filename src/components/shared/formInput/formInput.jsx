import { FontAwesomeIcon }   from '@fortawesome/react-fontawesome';
import React                 from 'react';

import './formInput.scss';

const FormInput = ({ label, icon, placeholder, changeFunction, value }) => {
  return (
    <div className='formInput'>
        <div className='formInput__topside'>
            <label>{label}</label>
            {icon && <FontAwesomeIcon className='formInput__icon' icon={icon} />}
        </div>
        <input 
            className='formInput__input' 
            placeholder={placeholder} 
            value={value}
            type='text'
            onChange={changeFunction} 
        />
    </div>
  )
}

export default FormInput;