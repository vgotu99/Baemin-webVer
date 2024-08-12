import React, { useState, useRef } from "react";
import "./style/Input.css";

const Input = ({ value, label, type, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e) => {
    setInput(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div
      className={`input-container ${isFocused ? "focused" : ""} ${
        input ? "has-input" : ""
      }`}
      onClick={() => inputRef.current.focus()}
    >
      <input
        ref={inputRef}
        type={type}
        value={value}
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder=""
      />
      <label>{label}</label>
    </div>
  );
};

export default Input;
