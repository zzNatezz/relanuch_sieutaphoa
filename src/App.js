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
import AddtoCartPage from './layout/pages/ProductAddtoCART/AddtoCartPage';
import PersonalInfor from './layout/pages/profileUser/component/PersonalInfor/PersonalInfor';
import Address from './layout/pages/profileUser/component/Address/Address';
import CoomsAndPrivacy from './layout/pages/profileUser/component/CommsAndPrivacy/CommsAndPrivacy';
import ContentSection from './layout/pages/profileUser/component/ContentSection/ContentSection';

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
        <Route path='/AddtoCartPage' element = {<AddtoCartPage />} />
        <Route path = '/profileUser' element = {<ProfileUser />} >
          <Route path='' element = {<ContentSection />} />
          <Route path='personal' element={<PersonalInfor />} />
          <Route path='addresses' element={<Address />} />
          <Route path='commAndPrivacy' element={<CoomsAndPrivacy />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
