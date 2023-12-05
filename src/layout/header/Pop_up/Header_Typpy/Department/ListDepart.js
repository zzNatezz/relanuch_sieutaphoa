import Icon from "../../../../imagin/icon/Icon";
import { OneArray, TwoArray } from "../../TemplateListHeader/TemplateListHeader";
import "./Header_popUp.scss";
import {
  ListDepartment,
  TvAndVideo,
  WearableTechnology,
  Computers,
  Savings,
  CellPhones,
} from "./listDetailDepart";

function ListDepart() {
  const BorderRight = {
    borderRight : '1px solid grey',
    paddingRight : '20px',
  }
  return (
    <div className="Header_PopUp">
       <OneArray
      style = {BorderRight}
      Icon = {Icon.depart}
      Title = 'All Department'
      ArrayList = {ListDepartment}
      />
      <TwoArray
      Icon1 = {Icon.TVandVideo}
      Title1 = "TV & Video"
      ArrayList1 = {TvAndVideo}
      Icon2 = {Icon.wearable}
      Title2 = "Wearable Technology"
      ArrayList2 = {WearableTechnology}
       />
       <OneArray
      Icon = {Icon.computer}
      Title = 'Computers'
      ArrayList = {Computers}
      />
      <TwoArray
      Icon1 = {Icon.saving}
      Title1 = "Savings"
      ArrayList1 = {Savings}
      Icon2 = {Icon.cellPhones}
      Title2 = "Cell Phones"
      ArrayList2 = {CellPhones}
       />
    </div>
  );
}
export default ListDepart;
