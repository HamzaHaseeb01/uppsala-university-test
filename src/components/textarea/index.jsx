import React from "react";

import style from "./textarea.module.scss";

const TextArea = ({
  label,
  name,
  register,
  placeholder,
  errorMessage,
  onChange,
  isDisable,
  value,
}) => {
  return (
    <>
      <div className={style.note}>
        {label && <label>{label}</label>}
        <textarea
          style={{
            border: errorMessage ? "1px solid #ff5050" : "",
          }}
          placeholder={placeholder}
          name={name}
          rows={3}
          onChange={onChange}
          value={value}
          {...(register && register(name))}
          disabled={isDisable || false}
        ></textarea>
        {errorMessage && (
          <span className={style.errorMessage}>{errorMessage}</span>
        )}
      </div>
    </>
  );
};

export default TextArea;
