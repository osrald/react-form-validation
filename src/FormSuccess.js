import React from "react";

let img3 = require("../src/img/img-3.svg");

function FormSuccess() {
  return (
    <div className="form-content-right">
      <div className="form-success">We have received your request!</div>
      <img src={img3.default} alt="success" className="form-img-2" />
    </div>
  );
}

export default FormSuccess;
