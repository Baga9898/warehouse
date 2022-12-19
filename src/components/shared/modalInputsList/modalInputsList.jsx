import React       from 'react';

import FormInput   from '../formInput/formInput';

const ModalInputsList = ({ inputsArray }) => {
    return (
        <div className='rackModal__body'>
            {inputsArray.map((input) => (
                <FormInput 
                    key={input.label}
                    label={input.label}
                    placeholder={input.placeholder}
                    changeFunction={input.changeFunction}
                    value={input.value}
                />
            )) }
        </div>
    );
}

export default ModalInputsList;