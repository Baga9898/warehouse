import React from 'react';
import {Routes, Route} from "react-router-dom";
import Layout from '../layout/layout';
import './app.scss';
import Check from './check';

const App = () => {
  return (
    <Layout>
      <Routes>
          <Route exact path="/"/>
          <Route exact path="/about" element={<Check/>}/>
        </Routes>
    </Layout>
  )
}

export default App;
