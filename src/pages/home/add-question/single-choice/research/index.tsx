import React from "react";

import style from "./research.module.scss";
import Radio from "components/radio";
import { useSelector } from "react-redux";

const ResearchPage = () => {
  const { introduction, question, options } = useSelector(
    (state: any) => state.form
  );
  return (
    <div className={style.research}>
      <p className={style.p}>{introduction}</p>
      <h6>{`${question}?`}</h6>
      {options.map((value) => {
        return (
          <div className={style.radio}>
            <Radio label={value.text || value.placeholder} name="radio" />
          </div>
        );
      })}
    </div>
  );
};

export default ResearchPage;
