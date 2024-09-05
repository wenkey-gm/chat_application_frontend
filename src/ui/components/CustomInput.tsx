import "./css/customInput.css";
import React from "react";

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const CustomInput: React.FC<InputProps> = ({
  label,
  type,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default CustomInput;
