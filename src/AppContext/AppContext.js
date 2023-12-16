import React, { createContext, useState } from "react";
import Icon from "../layout/imagin/icon/Icon";
import homeTotalLavAz from "../layout/pages/HOME/component/StoreInfor/homeTotalLavAz";


export const AppContext = createContext();

export const Contexts = ({children}) => {
 // update Heart
const [heart, setHeart] = useState('250');
const [cloneHomeLavaza, setCloneHomeLavaza] = useState(homeTotalLavAz);
                                   /// --~~~~~~~  ***  ~~~~~~~ -- ///
const updateHeart = (i) => {
     const fakeHomeLava = [...cloneHomeLavaza];
     fakeHomeLava[i].heart = fakeHomeLava[i].heart === Icon.heart ? Icon.heart_active : Icon.heart;
      setCloneHomeLavaza(fakeHomeLava);
      const heart_plus = fakeHomeLava.filter((item) => item.heart === Icon.heart_active)
      setHeart(heart_plus.length);
}

// Unit Decision
const [quality, setQualiti] =useState(250);

const decisionQualityBtm = (e) =>{
     const desirbQuality = document.getElementsByClassName("quality-selection")
     if(e.target.value === 'small' ){
          const smallSize = 250;
          desirbQuality.textContent = smallSize;
          setQualiti(smallSize);
     }
     else if(e.target.value === 'medium'){
          const mediumSize = 500;
          desirbQuality.textContent = mediumSize;
          setQualiti(mediumSize);
     }
     else if(e.target.value === 'large'){
          const largeSize = 750;
          desirbQuality.textContent = largeSize;
          setQualiti(largeSize);
     };

}



return(
     <AppContext.Provider
     value={{
      heart, setHeart, updateHeart,
      cloneHomeLavaza, setCloneHomeLavaza,
      quality, decisionQualityBtm,
     }}
     >
        {children}
     </AppContext.Provider>
)}
