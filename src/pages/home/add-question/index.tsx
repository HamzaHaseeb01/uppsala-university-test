import React, { useState } from "react";

import style from "./question.module.scss";
import Button from "components/button";
import SingleChoice from "./single-choice";
import MultipleChoice from "./multiple-choice";
import SingleLine from "./single-line";
import { setCategory } from "../../../redux/form.js";
import { useDispatch } from "react-redux";

const AddQuestion = () => {
  const dispatch = useDispatch();
  const [singleChoice, setSingleChoice] = useState(false);
  const [multipleChoice, setMultipleChoice] = useState(false);
  const [singleLine, setSingleLine] = useState(false);

  return (
    <div className={style.addQuestion}>
      <div className={style.flex}>
        <img src={require("../../../logos/Vector.png")} alt="logo" />
        <p>Add question</p>
      </div>

      {singleChoice ? (
        <SingleChoice />
      ) : multipleChoice ? (
        <MultipleChoice />
      ) : singleLine ? (
        <SingleLine />
      ) : (
        <>
          <div className={style.grid}>
            <div
              className={style.flexInner}
              onClick={() => {
                dispatch(setCategory(1));
                setSingleLine(true);
              }}
            >
              <img
                src={require("../../../logos/text_field_icon.png")}
                alt="logo"
              />
              <p>Text field</p>
            </div>
            <div className={style.flexInner}>
              <img
                src={require("../../../logos/text_area_icon.png")}
                alt="logo"
              />
              <p>Text area</p>
            </div>
            <div className={style.flexInner}>
              <img
                src={require("../../../logos/in_line_text-field.png")}
                alt="logo"
              />
              <p>In-line text field</p>
            </div>
            <div className={style.flexInner}>
              <img src={require("../../../logos/Date_icon.png")} alt="logo" />
              <p>Date</p>
            </div>
          </div>
          <div className={style.grid}>
            <div
              className={style.flexInner}
              onClick={() => setMultipleChoice(true)}
            >
              <img
                src={require("../../../logos/multiple_choice.png")}
                alt="logo"
              />
              <p>Multiple choice</p>
            </div>
            <div
              className={style.flexInner}
              onClick={() => {
                dispatch(setCategory(2));
                setSingleChoice(true);
              }}
            >
              <img
                src={require("../../../logos/single_choice.png")}
                alt="logo"
              />
              <p>Single choice</p>
            </div>
            <div className={style.flexInner}>
              <img src={require("../../../logos/Dropdown.png")} alt="logo" />
              <p>Dropdown</p>
            </div>
            <div className={style.flexInner}>
              <img src={require("../../../logos/matrix.png")} alt="logo" />
              <p>Matrix</p>
            </div>
          </div>
          <div className={style.grid}>
            <div className={style.flexInner}>
            <img
                src={require("../../../logos/scale_icon.png")}
                alt="logo"
              /><p>Scale</p>
            </div>
            <div className={style.flexInner}>
            <img
                src={require("../../../logos/rating.png")}
                alt="logo"
              /><p>Rating</p>
            </div>
            <div className={style.flexInner}>
            <img
                src={require("../../../logos/numerical_slider.png")}
                alt="logo"
              /><p>Numeric slider</p>
            </div>
            <div className={style.flexInner}>
            <img
                src={require("../../../logos/text_slider.png")}
                alt="logo"
              /><p>Text slider</p>
            </div>
            <div className={style.flexInner}>
            <img
                src={require("../../../logos/file_upload.png")}
                alt="logo"
              /><p>File upload</p>
            </div>
          </div>
          <div className={style.btnDiv}>
            <Button text="Cancel" btnClass={style.btn} />
          </div>
        </>
      )}
    </div>
  );
};

export default AddQuestion;
