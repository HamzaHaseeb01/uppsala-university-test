import React, { useState } from "react";

import style from "./multiple.module.scss";
import Button from "components/button";
import ResearchPage from "./research";

const MultipleChoice = () => {
  const [research, setResearch] = useState(false);

  return (
    <div>
      {research ? (
        <ResearchPage />
      ) : (
        <>
          <p>MultipleChoice</p>
          <div className={style.btnDiv}>
            <Button
              text="Save"
              handleClick={() => {
                setResearch(true);
              }}
            />
            <Button text="Cancel" btnClass={style.btn} />
          </div>
        </>
      )}
    </div>
  );
};

export default MultipleChoice;
