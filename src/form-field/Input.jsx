import React, { useState } from "react";
import "./style.css";



function Input({ label,onChange,errorMessage, ...othProps}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="inputField">
      <label>{label}</label>
      <input{...othProps} 
      onChange={onChange} 
      onBlur={() => setFocused(true)}
      onFocus={() => othProps.name === "confirmPassword" && setFocused(true)}
      focused={focused.toString()}
      type="text" />
      <span>{errorMessage}</span>
    </div>
  )
}

export default Input