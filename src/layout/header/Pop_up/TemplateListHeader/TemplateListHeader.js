import React from "react";
import "./TemplateListHeader.scss"


function OneArray(pros) {
  return (
      <div style={pros.style} className="OneArray">
        <div className="one_component-icon">
          <img src={pros.Icon} alt="icon" />
        </div>
        <div className="one_component-list">
          <h2>{pros.Title}</h2>
          <ul>
            {pros.ArrayList.map((item, index) => 
             (<li key={index}>{item}</li>)
            )}
          </ul>
        </div>
      </div>
  );
}

function TwoArray (pros){
  return(
    <div className="TwoArray">
        <div className="first-content">
          <div>
            <img src={pros.Icon1} alt="icon" />
          </div>
          <div className="first-list">
            <h2>{pros.Title1}</h2>
            <ul>
                {pros.ArrayList1.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>         
          </div>
        </div>
        <div className="second-component">
          <div>
            <img src={pros.Icon2} alt="icon" />
          </div>
          <div className="second-list">
            <h2>{pros.Title2}</h2>
            <ul>
            {pros.ArrayList2.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          </div>
        </div>
      </div>
  )
}

export { OneArray,TwoArray };
