import React from "react";

import style from "./input.module.scss";

const TextField = ({
  id,
  ref,
  type,
  icon,
  name,
  label,
  value,
  onClick,
  onClear,
  register,
  readOnly,
  onChange,
  className,
  isDisable,
  iconClass,
  wraperClass,
  placeholder,
  errorMessage,
  onClickhandle,
  searchClearToggle,
  inputClass,
  handleChange,
  field,
  index,
  ...restOfProps
}) => {
  return (
    <>
      <div className={`${style.inputContainer} ${wraperClass} `}>
        {label && <label>{label}</label>}
        <div
          style={{ position: "relative" }}
          className={className}
          onClick={onClickhandle}
        >
          <input
            ref={ref}
            style={{
              border: errorMessage ? "1px solid #ff5050" : "",
              backgroundColor: readOnly || isDisable ? "#ddd" : "#fff",
            }}
            id={id}
            name={name}
            value={value}
            onChange={(e) => handleChange(field, index, e.target.value)}
            type={type}
            placeholder={placeholder}
            register={register}
            readOnly={readOnly || false}
            disabled={isDisable || false}
            {...restOfProps}
            autoComplete="off"
            step={"any" || restOfProps.step}
            className={inputClass}
          />
        </div>
        {errorMessage && (
          <span className={style.errorMessage}>{errorMessage}</span>
        )}
      </div>
    </>
  );
};

export default TextField;
