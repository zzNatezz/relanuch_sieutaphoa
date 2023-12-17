import React, { createContext, useState } from "react";
import Icon from "../layout/imagin/icon/Icon";
import homeTotalLavAz from "../layout/pages/HOME/component/StoreInfor/homeTotalLavAz";

export const AppContext = createContext();

export const Contexts = ({children}) => {
 // update Heart
const [heart, setHeart] = useState(0);
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

const [quality, setQualiti] = useState();
const [createBackground , setcreateBackground] = useState('') // <-- changBackgroundColor.
                    /// --~~~~~~~  ***  ~~~~~~~ -- ///
const decisionQuatityBtm = (e) =>{
     const desiredQuatities = document.getElementsByClassName("quatity-selection");
     const currentTarget = e.target.value;
     if(currentTarget === 'small'){
          const smallSize = 250;
          desiredQuatities.textContent = smallSize;
          setQualiti(smallSize);
     }
     else if(currentTarget === 'medium'){
          const mediumSize = 500;
          desiredQuatities.textContent = mediumSize;
          setQualiti(mediumSize);
     }
     else if(currentTarget === 'large'){
          const largeSize = 750;
          desiredQuatities.textContent = largeSize;
          setQualiti(largeSize);
     }
};   

const handleBackground = () =>{
     createBackground ? setcreateBackground('') : setcreateBackground('changeBackground')
}




return(
     <AppContext.Provider
     value={{
      heart, setHeart, updateHeart,
      cloneHomeLavaza, setCloneHomeLavaza,
      quality, decisionQuatityBtm,setcreateBackground,handleBackground, 
      
     }}
     >
        {children}
     </AppContext.Provider>
)}
