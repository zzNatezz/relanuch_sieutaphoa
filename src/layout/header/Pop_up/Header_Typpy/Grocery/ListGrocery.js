
import "../Department/Header_popUp.scss";
import { FreshProduce,Grocery,BakeryBread,Frozen,Snacks,Candy,CooktailsAndCoffe,Beverages } from "./listDetailGrocery";
import Icon from '../../../../imagin/icon/Icon'
import {TwoArray} from '../../TemplateListHeader/TemplateListHeader'

function ListGrocery() {
  return (
    <div className="Header_PopUp">  
      <TwoArray
      Icon1 = {Icon.grocery}
      Title1 = "Grocery"
      ArrayList1 = {Grocery}
      Icon2 = {Icon.freshProduce}
      Title2 = "Fresh Produce"
      ArrayList2 = {FreshProduce}
       />
      <TwoArray
      Icon1 = {Icon.BakeryBRead}
      Title1 = "Bakery & Bread"
      ArrayList1 = {BakeryBread}
      Icon2 = {Icon.frozen}
      Title2 = "Frozen"
      ArrayList2 = {Frozen}
       />
     <TwoArray
      Icon1 = {Icon.snack}
      Title1 = "Snacks"
      ArrayList1 = {Snacks}
      Icon2 = {Icon.candy}
      Title2 = "Candy"
      ArrayList2 = {Candy}
       />
       <TwoArray
      Icon1 = {Icon.cocktails_caffe}
      Title1 = "Cocktails & Mixes Coffee"
      ArrayList1 = {CooktailsAndCoffe}
      Icon2 = {Icon.beverage}
      Title2 = "Beverages"
      ArrayList2 = {Beverages}
       />
    </div>
  );
}
export default ListGrocery;
