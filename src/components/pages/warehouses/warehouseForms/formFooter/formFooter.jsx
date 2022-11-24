import React from 'react';

const FormFooter = ({ firstFunction, secondFunction, firstButtonText, secondButtonText }) => {
    return (
        <div className='warehouseModal__footer'>
            <button onClick={firstFunction}>{firstButtonText}</button>
            <button onClick={secondFunction}>{secondButtonText}</button>
        </div>
    )
}

export default FormFooter;