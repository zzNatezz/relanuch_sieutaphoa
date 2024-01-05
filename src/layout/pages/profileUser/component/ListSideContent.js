import React, { useContext } from "react";
import Picture from "../../../imagin/picture/Picture";
import AsideProfileList from "./subComponent/AsideProfileList";
import {
    manageAccount,
    myItems,
    sub_plans,
    customerService,
  } from "./subComponent/storeListPage";
import Icon from "../../../imagin/icon/Icon";
import { Link } from "react-router-dom";
import { AppContext } from "../../../../AppContext/AppContext";

function ListSideContent() {
  const {handleLogut} = useContext(AppContext)
    return ( 
         <aside className="aside-container">
          <section className="aside-avatar">
            <img
              className="backgroundAvatar"
              src={Picture.backgroundAvatar}
              alt="background"
            />
            <div className="avatarAndName">
              <img className="mainAvatar" src={Icon.mainAvatar} alt="ava" />
              <div className="nameAndregis">
                <h2>zz__Nate__zz</h2>
                <div>Registered: 17th May 2022</div>
              </div>
            </div>
          </section>
          <section className="aside-list">
            <div className="aside-manageAccount">
                <AsideProfileList
                Tittle="Manage Account"
                array={manageAccount} />
              
            </div>
            <div className="aside-myItem">
                <AsideProfileList 
                Tittle='My items'
                array={myItems}
                />
            </div>
            <div className="aside-subAndPlan">
                <AsideProfileList
                Tittle='Subscriptions & plans'
                array={sub_plans}/>
            </div>
            <div className="aside-customerServices">
                <AsideProfileList
                Tittle='Customer Service'
                array={customerService}
                />
            </div>
          </section>
          <button
          onClick={()=>handleLogut()}
           className="logOut">Logout</button>
        </aside>
    );
}

export default ListSideContent;
