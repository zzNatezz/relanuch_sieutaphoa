import Icon from "../../../imagin/icon/Icon";
import "./Header_popUp.scss";
import {
  ListDepartment,
  TvAndVideo,
  WearableTechnology,
  Computers,
  Savings,
  CellPhones,
} from "./listDetail";

function RenderDepartment() {
  return (
    <div className="Header_PopUp">
      <div className="deparment">
        <div className="depart-icon">
          <img src={Icon.depart} alt="icon" />
        </div>
        <div className="depart-list">
          <h2>All Departments</h2>
          <ul>
            {ListDepartment.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="tv-and-tech">
        <div className="tv-content">
          <div>
            <img src={Icon.TVandVideo} alt="icon" />
          </div>
          <div className="tv-video-list">
            <h2>TV & Video</h2>
            <ul>
                {TvAndVideo.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>         
          </div>
        </div>
        <div className="wearable-content">
          <div>
            <img src={Icon.wearable} alt="icon" />
          </div>
          <div className="wearable-list">
            <h2>Wearable Technology</h2>
            <ul>
            {WearableTechnology.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          </div>
        </div>
      </div>
      <div className="computer">
        <div>
          <img src={Icon.computer} alt="icon" />
        </div>
        <div className="computer-list">
            <h2>Computers</h2>
            <ul>
          {Computers.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        </div>
      </div>
      <div className="saving-and-phone">
        <div className="saving-content">
          <div>
            <img src={Icon.saving} alt="icon" />  
          </div>
          <div className="saving-list">
            <h2>Savings</h2>
            <ul>
                {Savings.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
        </div>
        <div className="cell-phone-content">
          <div>
            <img src={Icon.cellPhones} alt="icon" />
          </div>
          <div className="phone-list">
            <h2>Cell Phones</h2>
            <ul>
                {CellPhones.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}
export default RenderDepartment;
