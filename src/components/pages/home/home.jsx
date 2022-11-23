import React        from 'react';

import * as INTL    from '../../../utils/texts';
import PageTamplate from '../../shared/pageTemplate/pageTamplate';

const Home = () => {
  return (
    <PageTamplate
      pageName={INTL.homePage}
      extraClassName='home'
      rightsideComponent={null}
    >

    </PageTamplate>
  )
}

export default Home;