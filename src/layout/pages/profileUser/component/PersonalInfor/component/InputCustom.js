import React from "react";
import "./InputCustom.scss";

function InputCustom({header,type}) {
  return (
    <div className="inputCustom-container">
      <h5>{header}</h5>
      <input type={type} name={header} />
    </div>
  );
}

export default InputCustom;
