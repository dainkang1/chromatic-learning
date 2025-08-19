import React, { useState } from 'react';
import './Input.css';

const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  required = false,
  error,
  helpText,
  size = 'medium',
  fullWidth = false,
  icon,
  prefix,
  suffix,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e) => {
    setFocused(false);
    onBlur?.(e);
  };

  const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const wrapperClasses = [
    'input-wrapper',
    `input-wrapper--${size}`,
    fullWidth && 'input-wrapper--full-width',
    disabled && 'input-wrapper--disabled',
    error && 'input-wrapper--error',
    focused && 'input-wrapper--focused',
    (prefix || suffix || icon) && 'input-wrapper--has-addon',
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      
      <div className="input-container">
        {icon && <span className="input-icon">{icon}</span>}
        {prefix && <span className="input-prefix">{prefix}</span>}
        
        <input
          id={inputId}
          type={type}
          className="input-field"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          required={required}
          {...props}
        />
        
        {suffix && <span className="input-suffix">{suffix}</span>}
      </div>
      
      {error && <span className="input-error">{error}</span>}
      {helpText && !error && <span className="input-help">{helpText}</span>}
    </div>
  );
};

export default Input;