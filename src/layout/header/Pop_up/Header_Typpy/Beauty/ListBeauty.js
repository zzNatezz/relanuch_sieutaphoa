import React from "react";
import { OneArray,TwoArray } from "../../TemplateListHeader/TemplateListHeader";
import { Featured_Shop,TrendingInBeauty,FeaturedBrands,CommunitiesToSupport,PremiumBeauty,Beauty } from "./ListDetailBeauty";
import '../Department/Header_popUp.scss'
import Icon from "../../../../imagin/icon/Icon";


function ListBeauty() {
    return (
      <div className="Header_PopUp">
        <TwoArray
        Icon1 = {Icon.feature_shop}
        Title1 = "Featured Shops"
        ArrayList1 = {Featured_Shop}
        Icon2 = {Icon.TrendingBeauty}
        Title2 = "Trending in Beauty"
        ArrayList2 = {TrendingInBeauty}
         />
        <TwoArray
        Icon1 = {Icon.feature_brands}
        Title1 = "Featured Brands"
        ArrayList1 = {FeaturedBrands}
        Icon2 = {Icon.CommunitiesSp}
        Title2 = "Communities to Support"
        ArrayList2 = {CommunitiesToSupport}
         />
         <OneArray
         Icon = {Icon.premiumBeauty}
         Title = "Premium Beauty"
         ArrayList = {PremiumBeauty}
         />
         <OneArray
             Icon = {Icon.beauty}
             Title = "Beauty"
             ArrayList = {Beauty}
         />
      </div>
    );
  }
  export default ListBeauty;
  