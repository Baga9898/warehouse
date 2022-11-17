import React from 'react';

import './pageTemplate.scss';

const PageTamplate = ({ pageName, extraClassName, children, rightsideComponent }) => {
  return (
    <section className={'pageTemplate ' + extraClassName}>
        <div className='pageTemplate__header'>
            <h1>{pageName}</h1>
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