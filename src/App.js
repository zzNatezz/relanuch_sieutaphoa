import React, { useContext } from 'react';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Home from './layout/pages/HOME/Home';
import ProfileUser from './layout/pages/profileUser/ProfileUser';
import PageProduct from './layout/pages/PageProduct/PageProduct';
import DescriptionProduct from './layout/pages/PageProduct/component/description/DescriptionProduct';
import FeatureProduct from './layout/pages/PageProduct/component/feature/FeatureProduct';
import ReviewTemplate from './layout/pages/PageProduct/component/review/ReviewTemplate';
import SimilarProduct from './layout/pages/PageProduct/component/similar/SimilarProduct';
import { AppContext } from './AppContext/AppContext';

function App() {
  const {cloneHomeLavaza} = useContext(AppContext)
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Home />} />
        {cloneHomeLavaza.map((item,i)=>(
          <Route key={i} path = {item.link} element = {<PageProduct itemProductPage = {
            item} />}>
              <Route path='description' element = {<DescriptionProduct />}/>
              <Route path='features' element={<FeatureProduct />} />
              <Route path='review' element={<ReviewTemplate />} />
              <Route path='similar' element={<SimilarProduct />} />
            </Route>
        ))}
        <Route path = '/profileUser' element = {<ProfileUser />} />
      </Routes>
    </div>
  );
}

export default App;
