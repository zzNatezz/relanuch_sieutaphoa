import React, { createContext, useState } from "react";
import Icon from "../layout/imagin/icon/Icon";
import homeTotalLavAz from "../MainStorage/homeTotalLavAz";

export const AppContext = createContext();

export const Contexts = ({children}) => {
 // UPDATE_HEART
const [heart, setHeart] = useState(0);
const [cloneHomeLavaza, setCloneHomeLavaza] = useState(homeTotalLavAz);
          /// --~~~~~~~  ***  ~~~~~~~ -- ///
const updateHeart = (i) => {
     const fakeHomeLava = [...cloneHomeLavaza];
     fakeHomeLava[i].heart = fakeHomeLava[i].heart === Icon.heart ? Icon.heart_active : Icon.heart;
     setCloneHomeLavaza(fakeHomeLava);
     const heart_plus = fakeHomeLava.filter((item) => item.heart === Icon.heart_active);
     setHeart(heart_plus.length);
}

// UNIT_DECISION
const [quality, setQualiti] = useState();
const [activeClass , setactiveClass] = useState();// <-- set class Name.
          /// --~~~~~~~  ***  ~~~~~~~ -- ///
const decisionQuatityBtm = (e,index) =>{
     const desiredQuatities = document.getElementsByClassName("quatity-selection");
     const currentTarget = e.target.value;
     if(currentTarget === 'Small'){
          const smallSize = 250;
          desiredQuatities.textContent = smallSize;
          setQualiti(smallSize);
     }
     else if(currentTarget === 'Medium'){
          const mediumSize = 500;
          desiredQuatities.textContent = mediumSize;
          setQualiti(mediumSize);
     }
     else if(currentTarget === 'Large'){
          const largeSize = 750;
          desiredQuatities.textContent = largeSize;
          setQualiti(largeSize);
     }
     setactiveClass(index)
};
     const hanldeSingleClass = (e) =>{
     const contentText = e.target.textContent
     setactiveClass(contentText)}

// AddtoCart Functions
const [addToCart , setAddtoCart] = useState([])
     /// --~~~~~~~  ***  ~~~~~~~-- ///
const updateAddtoCart = (e) =>{ 
     const Action = [...addToCart, e];
     setAddtoCart(Action);
};
const decreaseAddtoCart = (e) =>{
     const target = addToCart.find(i => i===e)
     const index = addToCart.indexOf(target)
     addToCart.splice(index,1)
     const cloneAddtoCart = [...addToCart]
     setAddtoCart(cloneAddtoCart);                
};

const handleDeleteAddtoCart = (e) =>{
     const target = addToCart.filter(i => i === e);
     const remainAddtoCart = addToCart.filter(itemInCart => target.includes(itemInCart) === false);
      //with the function above, we can code it as below
      // addtoCart.filter(itemIncart => !target.includes(itemInCart))
     setAddtoCart(remainAddtoCart);
};

const checkOutAllCart = () =>{
     let alertPage = window.confirm('Do you want to check out ?')
     if(alertPage === true){
          const emptyArray = []
          setAddtoCart(emptyArray)
     }
     else{
          alert('Enjoy your shopping') //<-- still update when completed
     }
}


const totalPrice = [...addToCart].reduce((x,y)=>(x + (y.price-y.price*0.1)+10), 0);

return(
     <AppContext.Provider
     value={{
      heart, setHeart, updateHeart,
      cloneHomeLavaza, setCloneHomeLavaza,
      quality, decisionQuatityBtm,setactiveClass, activeClass,hanldeSingleClass,
      addToCart,setAddtoCart,updateAddtoCart,
      totalPrice,
      decreaseAddtoCart,handleDeleteAddtoCart,checkOutAllCart
     }}
     >
        {children}
     </AppContext.Provider>
)}