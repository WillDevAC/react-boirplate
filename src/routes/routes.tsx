import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home';
import PrivatePage from '../pages/private';

const RouterController: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/private/:di' element={<PrivatePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterController;