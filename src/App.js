import './App.scss';

import Home from './page/Home';

import Not from './page/Not';
import Product from './page/Product';
import React, { useState } from 'react'

import {Link, BrowserRouter, Route, Routes} from 'react-router-dom';




function App() {
 

  return (
    <BrowserRouter basename='/react-sample'> 
      <div className="wrap">

        <header>
       
          <nav>
            <Link to='/'> Home </Link>
            <Link to='/product'> PRODUCT </Link>
          </nav>

        </header>

        <main>

          <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/product' element={ <Product/> } />
            <Route path='/*' element={ <Not/> } />
          </Routes>

        </main>

      </div>
    </BrowserRouter>
    
  );
}

export default App;
