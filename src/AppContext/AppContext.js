import React, { createContext, useState } from "react";
import Icon from "../layout/imagin/icon/Icon";
import homeTotalLavAz from "../MainStorage/homeTotalLavAz";


export const AppContext = createContext();

export const Contexts = ({children}) => {
 // UPDATE_HEART
const [heart, setHeart] = useState(0);
const [cloneHomeLavaza, setCloneHomeLavaza] = useState(homeTotalLavAz);

// UNIT_DECISION
const [quality, setQualiti] = useState();
const [activeClass , setactiveClass] = useState();// <-- set class Name.

// AddtoCart Functions
const [addToCart , setAddtoCart] = useState([])

//Login Page
const [login , setLogin] = useState(false)

//Add User
const userLocal = JSON.parse(localStorage.getItem('userData')) || [];  
const [user , setUser] = useState(userLocal)


          /// --~~~~~~~  ***  ~~~~~~~ -- /// <--Set Heart
const updateHeart = (i) => {
     if (login === true ){
          const fakeHomeLava = [...cloneHomeLavaza];
          fakeHomeLava[i].heart = fakeHomeLava[i].heart === Icon.heart ? Icon.heart_active : Icon.heart;
          setCloneHomeLavaza(fakeHomeLava);
          const heart_plus = fakeHomeLava.filter((item) => item.heart === Icon.heart_active);
          setHeart(heart_plus.length);
          console.log(login);
     }
     else{
          window.location.href='/loginPage'
     }
 
}

     /// --~~~~~~~  ***  ~~~~~~~ -- /// <--Set Quantity for prodct and Hanlde class
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

     /// --~~~~~~~  ***  ~~~~~~~-- /// <-- add to cart functino
const updateAddtoCart = (e) =>{ 
     if(login === true){
          const Action = [...addToCart, e];
          setAddtoCart(Action);
     }
     else{
          window.location.href = '/loginPage'
     }
          

};

     /// --~~~~~~~  ***  ~~~~~~~-- /// <--Decrease quantities in Cart
const decreaseAddtoCart = (e) =>{
     const target = addToCart.find(i => i===e)
     const index = addToCart.indexOf(target)
     addToCart.splice(index,1)
     const cloneAddtoCart = [...addToCart]
     setAddtoCart(cloneAddtoCart);                
};

     /// --~~~~~~~  ***  ~~~~~~~-- /// <-- remove ONE in Cart
const handleDeleteAddtoCart = (e) =>{
     const target = addToCart.filter(i => i === e);
     const remainAddtoCart = addToCart.filter(itemInCart => target.includes(itemInCart) === false);
      //with the function above, we can code it as below
      // addtoCart.filter(itemIncart => !target.includes(itemInCart))
     setAddtoCart(remainAddtoCart);
};

     /// --~~~~~~~  ***  ~~~~~~~-- /// <-- remove all cart
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

     /// --~~~~~~~  ***  ~~~~~~~-- /// <-- sum
const totalPrice = [...addToCart].reduce((x,y)=>(x + (y.price-y.price*0.1)+10), 0);

     /// --~~~~~~~  ***  ~~~~~~~-- /// <-- check status user.
const handleLogin =() =>{
     const userData = localStorage.getItem('userData')
     const isAvailable = userData.name.length === 0 ? false : true;
     setLogin(isAvailable)
}
     /// --~~~~~~~  ***  ~~~~~~~-- /// <-- signUp.
const handleSignUp = () =>{
     const userID = document.querySelector('#signUp-email').value;
     const userPassword = document.querySelector('#signUp-password').value;
     const userConfirmPass = document.querySelector('#signUp-confirmPassWord').value;
     const userData = {
          name : userID,
          passWord  : userPassword,
     };
     const addUser = [...user, userData]
     if(userConfirmPass !== userPassword || userPassword === '' || userConfirmPass === ''){
          alert('please check you password')
     }
     else{
          localStorage.setItem('userData', JSON.stringify(addUser)) 
          setUser(addUser);
          console.log(addUser);
          alert('Sign Up sucessfully');
          window.location.href = '/loginPage'         
     }
}

     /// --~~~~~~~  ***  ~~~~~~~-- /// <-- Check Login
const handleSignIn = (e) =>{
     const currentUser = {
          name : document.querySelector('.signIn-email').value,
          passWord  : document.querySelector('.signIn-password').value,
     }
     console.log(currentUser);
     const isCorrect = userLocal.filter(item => item.name === currentUser.name && item.passWord === currentUser.passWord)
     if(isCorrect.length > 0){
          window.location.href = '/';
          alert('Login successfully');
          setLogin(true)
     }
     else{
          alert('Email is incorrect. Please check it')
          e.preventDefault()
     }
     
}


return(
     <AppContext.Provider
     value={{
      heart, setHeart, updateHeart,
      cloneHomeLavaza, setCloneHomeLavaza,
      quality, decisionQuatityBtm, setactiveClass, activeClass, hanldeSingleClass,
      addToCart, setAddtoCart, updateAddtoCart,
      totalPrice,
      decreaseAddtoCart,handleDeleteAddtoCart,checkOutAllCart,
      handleLogin,login,
      handleSignUp,handleSignIn
     }}
     >
        {children}
     </AppContext.Provider>
)}