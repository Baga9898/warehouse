import { faChevronLeft }     from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }   from '@fortawesome/react-fontawesome';
import { useNavigate }       from 'react-router-dom';
import React                 from 'react';

import { back }              from '../../../utils/texts';

import 'animate.css';
import './pageTemplate.scss';

const PageTamplate = ({ pageName, extraClassName, children, rightsideComponent, isWithHistory }) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section className={'animate__animated animate__fadeIn pageTemplate ' + extraClassName}>
        <div className='pageTemplate__header'>
            <div className='pageTemplate__header-leftside'>
              {isWithHistory && 
                <button onClick={goBack}>
                  <FontAwesomeIcon icon={ faChevronLeft } />
                  {back}
                </button>
              }
              <h1>{pageName}</h1>
            </div>
            <div className='pageTemplate__header-rightside'>
                {rightsideComponent}
            </div>
        </div>
        <div className='pageTemplate__body'>
            {children}
        </div>
    </section>
  )
}

export default PageTamplate;