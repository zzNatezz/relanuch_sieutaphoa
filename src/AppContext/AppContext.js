import React, { createContext, useState } from "react";
import Icon from "../layout/imagin/icon/Icon";
import homeTotalLavAz from "../layout/pages/HOME/component/StoreInfor/homeTotalLavAz";


export const AppContext = createContext();

export const Contexts = ({children}) => {
 // update Heart
const [heart, setHeart] = useState();
const [cloneHomeLavaza, setCloneHomeLavaza] = useState(homeTotalLavAz);

const updateHeart = (i) => {
     const fakeHomeLava = [...cloneHomeLavaza];
     fakeHomeLava[i].heart = fakeHomeLava[i].heart === Icon.heart ? Icon.heart_active : Icon.heart;
      setCloneHomeLavaza(fakeHomeLava);
      const heart_plus = fakeHomeLava.filter((item) => item.heart === Icon.heart_active)
      setHeart(heart_plus.length);
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
