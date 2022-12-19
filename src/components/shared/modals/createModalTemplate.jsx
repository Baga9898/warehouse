import React             from 'react';

import FormFooter        from './../../pages/warehouses/warehouseForms/formFooter/formFooter';
import ModalInputsList   from './../modalInputsList/modalInputsList';

const CreateModalTemplate = ({ inputsArray, firstFunction, secondFunction, firstButtonText, secondButtonText }) => {
    return (
        <>
            <ModalInputsList inputsArray={inputsArray} />
            <FormFooter
                firstFunction={firstFunction}
                secondFunction={secondFunction}
                firstButtonText={firstButtonText}
                secondButtonText={secondButtonText}
            />
        </>
    )
}

export default CreateModalTemplate;