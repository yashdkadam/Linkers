import React from "react";

const Input = ({ label, name }) => {
  return (
    <div className="form-group row bg-white border container">
      <label for={name} className="col-sm-2 col-form-label">
        {label}
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control-plaintext"
          id={name}
          placeholder="Enter title"
        />
      </div>
    </div>
  );
};

export default Input;
