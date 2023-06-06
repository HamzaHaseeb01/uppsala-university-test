import React from "react";

import style from "./button.module.scss";

const Button = ({
  text,
  iconStart,
  iconEnd,
  handleClick,
  type,
  className,
  isLoading,
  btnClass,
  disabled,
  btnLoaderClass,
  form,
  width,
  showProgress,
  progress,
  ...restOfProps
}) => {
  return (
    <>
      <button
        className={`${style.btn} ${btnClass}`}
        type={type}
        form={form}
        onClick={handleClick}
        disabled={isLoading || disabled ? true : false}
        style={{
          pointerEvents: isLoading || disabled ? "none" : "auto",
          width,
          position: "relative",
        }}
        {...restOfProps}
      >
        {iconStart && <img src={iconStart} alt="" className={style.img} />}
        {text && (
          <span className={`${style.btnTitle} ${className}`}>{text}</span>
        )}
      </button>
    </>
  );
};

export default Button;
