import React from 'react';
import './styles/Input.css';

const Input = ({ 
  label, 
  id, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  required = false,
  error = '' 
}) => {
  return (
    <div className="input-group">
      {label && <label htmlFor={id} className="input-label">{label}</label>}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`input-field ${error ? 'input-error' : ''}`}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default Input;
