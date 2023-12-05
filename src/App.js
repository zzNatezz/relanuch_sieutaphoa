import React from 'react';
import './App.css';
import Header from './layout/header/Header';
import {Routes , Route} from 'react-router-dom'
import Home from './layout/pages/HOME/Home';
import ProductDetail from './layout/pages/productDetail/ProductDetail';
import ProfileUser from './layout/pages/profileUser/ProfileUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/productDetail' element = {<ProductDetail />} />
        <Route path = '/profileUser' element = {<ProfileUser />} />
      </Routes>
    </div>
  );
}

export default App;
