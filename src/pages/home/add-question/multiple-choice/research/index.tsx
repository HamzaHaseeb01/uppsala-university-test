import React from "react";

import style from "./research.module.scss";
import Radio from "components/radio";

const ResearchPage = () => {
  return (
    <div className={style.research}>
      <p className={style.p}>
        Research shows that relaxation keep (aage mai nae likh skti too much
        lengthy text ap isse figma se copy paste kr lena shukria)
        <span>Relaxing is important!</span>
      </p>
      <h6>
        When was the last time you had some time off?{" "}
        <span>E.g., as a vacation,weekend,holidays,etc.</span>
      </h6>
      <div className={style.radio}>
        <Radio label="Never" name="radio" />
      </div>

      <div className={style.radio}>
        <Radio label="Everyday" name="radio" />
      </div>
      <div className={style.radio}>
        <Radio label="I don't remember" name="radio" />
      </div>
      <div className={style.radio}>
        <Radio label="3 days ago" name="radio" />
      </div>
      <div className={style.radio}>
        <Radio label="4 days ago" name="radio" />
      </div>
      <div className={style.radio}>
        <Radio label="No answer is applicable" name="radio" />
      </div>
    </div>
  );
};

export default ResearchPage;
