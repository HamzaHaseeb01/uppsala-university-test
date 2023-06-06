import React, { useState } from "react";

import style from "./single.module.scss";
import Button from "components/button";
import ResearchPage from "./research";
import EditorContainer from "components/editor";
import { useForm } from "react-hook-form";
import Checkbox from "components/checkbox";
import Radio from "components/radio";
import { useSelector, useDispatch } from "react-redux";
import { setState } from "../../../../redux/form.js";

const SingleLine = () => {
  const dispatch = useDispatch();
  const [research, setResearch] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { required, question } = useSelector((state: any) => state.form);

  const { control } = useForm();

  const handleChange = (field: string, value: string | Boolean) => {
    dispatch(setState({ field, value }));
    if (field === "required") setIsChecked(!isChecked);
  };

  return (
    <div>
      {research ? (
        <ResearchPage />
      ) : (
        <div className={style.myLine}>
          <div className={style.flex}>
            icon <p>Text - Single line</p>
          </div>
          <EditorContainer
            control={control}
            label="Question"
            placeholder=""
            field="question"
            handleChange={handleChange}
          />
          <div className={style.checkbox}>
            <Checkbox
              label={"Required question"}
              handleChange={() => handleChange("required", !isChecked)}
            />
          </div>

          <div
            className={style.flex}
            style={{
              gap: "20px",
              marginTop: "50px",
            }}
          >
            <p>Answer type:</p>
            <Radio label="Alphanumerical data" name="radio" />
            <Radio label="Only numerical data" name="radio" />
          </div>

          <div className={style.btnDiv}>
            <Button text="Cancel" btnClass={style.btn} />
            <Button
              text="Save"
              disabled={!question ? true : false}
              handleClick={() => {
                setResearch(true);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleLine;
