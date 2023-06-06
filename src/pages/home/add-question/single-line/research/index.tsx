import React from "react";
import TextField from "components/textfield";
import style from "./researchPage.module.scss";
import { useSelector } from "react-redux";

const ResearchPage = () => {
  const { question } = useSelector((state: any) => state.form);
  return (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      {/* <p style={{ padding: '20px 0' }}>Sport pertains to any form of phyical activity or game, often competitve and organized, that aims to use, maintain, or improve physical ability and skills while providing enjoyment to participants, and in some cases, entertainment to spectators.</p> */}
      <TextField label={`${question}?`} inputClass={style.input} />
      <span style={{ color: "#757171", fontSize: "13px" }}>
        Enter only number
      </span>
    </div>
  );
};

export default ResearchPage;
