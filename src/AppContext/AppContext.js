import React, { createContext, useState } from "react";
import Icon from "../layout/imagin/icon/Icon";
import homeTotalLavAz from "../layout/pages/HOME/component/StoreInfor/homeTotalLavAz";



export const AppContext = createContext();

export const Contexts = ({children}) => {
 // update Heart
const [heart, setHeart] = useState(0);
const [cloneHomeLavaza, setCloneHomeLavaza] = useState(homeTotalLavAz);


const updateHeart = () => {
      cloneHomeLavaza.map(Item =>
      Item.heart = Item.heart === Icon.heart ? Icon.heart_active : Icon.heart
   );
   const heart_plus = heart + 1;
   setHeart(heart_plus);
   setCloneHomeLavaza(cloneHomeLavaza);
}


return(
     <AppContext.Provider
     value={{
      heart, setHeart, updateHeart,
      cloneHomeLavaza, setCloneHomeLavaza
     }}
     >
        {children}
     </AppContext.Provider>
)}
