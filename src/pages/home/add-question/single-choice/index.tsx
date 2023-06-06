import React, { useState } from "react";
import { useForm } from "react-hook-form";

import style from "./single.module.scss";
import Button from "components/button";
import ResearchPage from "./research";
import EditorContainer from "components/editor";
import Checkbox from "components/checkbox";
import Radio from "components/radio";
import TextField from "components/textfield";
import { useSelector, useDispatch } from "react-redux";
import {
  setState,
  setStateForOptions,
  addNewOption,
  deleteOption,
} from "../../../../redux/form.js";

const SingleChoice = () => {
  const dispatch = useDispatch();

  const { required, question, options, introduction } = useSelector(
    (state: any) => state.form
  );
  const [research, setResearch] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { control } = useForm();

  const handleChange = (field: string, value: string | Boolean) => {
    dispatch(setState({ field, value }));
    if (field === "required") setIsChecked(!isChecked);
  };

  const handleChangeForOptions = (
    field: string,
    index: number,
    value: string
  ) => {
    dispatch(setStateForOptions({ field: field, value: value, index }));
  };

  return (
    <div>
      {research ? (
        <ResearchPage />
      ) : (
        <>
          <p className={style.single}>bookmark icon SingleChoice</p>
          <div className={style.intro}>
            <p className={style.p1}>Introduction (optional)</p>
            <p className={style.p2}>Hide introduction</p>
          </div>
          <EditorContainer
            control={control}
            handleChange={handleChange}
            field="introduction"
          />
          <p className={style.p1}>Question</p>
          <EditorContainer
            control={control}
            handleChange={handleChange}
            field="question"
          />
          <div style={{ padding: "20px 0" }}>
            <Checkbox
              label="Required quetion"
              handleChange={() => handleChange("required", !isChecked)}
            />
          </div>
          <p className={style.p1}>Options</p>
          {options.map((value, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  paddingBottom: "10px",
                }}
              >
                <div
                  style={{
                    border: "2px solid #757171",
                    borderRadius: "50%",
                    height: "20px",
                    width: "20px",
                  }}
                ></div>
                <TextField
                  placeholder={options[index].placeholder}
                  wraperClass={style.wrapperClass}
                  inputClass={style.inputClass}
                  handleChange={handleChangeForOptions}
                  field="text"
                  index={index}
                  value={options[index].text}
                />
                <TextField
                  inputClass={style.inputClass1}
                  placeholder="Weight"
                  handleChange={handleChangeForOptions}
                  field="weight"
                  index={index}
                  value={options[index].weight}
                />
                <img
                  src={require("../../../../logos/delete_icon.png")}
                  onClick={() => dispatch(deleteOption({ index }))}
                  alt="logo"
                />
                
              </div>
            );
          })}
          <div
            style={{
              display: "flex",
              gap: "40px",
              padding: "20px 0 20px 30px",
              alignItems: "center",
            }}
          >
            <Button
              text="Add new option"
              handleClick={() => dispatch(addNewOption())}
            />
            <div style={{ border: "1px dashed #757171", height: "25px" }}></div>
            <Checkbox label="Shuffle options order" />
          </div>
          <div className={style.btnDiv}>
            <Button
              text="Save"
              disabled={!introduction ? true : false}
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

export default SingleChoice;
