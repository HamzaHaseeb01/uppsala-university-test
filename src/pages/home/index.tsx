import React, { useEffect, useState } from "react";

import Layout from "components/layout";

import style from "./home.module.scss";
import Button from "components/button";
import AddQuestion from "./add-question";
import { useDispatch, useSelector } from "react-redux";
import { CreateQuestion, setState } from "../../redux/form.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const dispatch = useDispatch();
  const { category, question, introduction, options, success, error, isError } =
    useSelector((state: any) => state.form);
  const [active, setActive] = useState(1);
  const [addQuestion, setAddQuestion] = useState(false);

  const onClick = () => {
    if (category === 1)
      dispatch(
        CreateQuestion({
          parent: null,
          study: 3,
          type: 20,
          children: [],
          name: "Hamza Practice Question",
          position: 0,
          depth: 0,
          number_child: 0,
          placeholder: 0,
          path: null,
          language: "SE",
          properties: { question },
          is_deleted: false,
          media: null,
        })
      );
    else if (category === 2)
      dispatch(
        CreateQuestion({
          parent: null,
          study: 3,
          type: 20,
          children: [],
          name: "Hamza Practice Question",
          position: 0,
          depth: 0,
          number_child: 0,
          placeholder: 0,
          path: null,
          language: "SE",
          properties: { question, introduction, options },
          is_deleted: false,
          media: null,
        })
      );
  };
  useEffect(() => {
    if (success) {
      toast.success("question created", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(setState({ field: "success", value: false }));
    }
    if (isError) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(setState({ field: "isError", value: false }));
    }
  }, [success, dispatch, error, isError]);

  return (
    <div>
      <Layout>
        <div className={style.mainMain}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />
          <img src={require("../../logos/S_Logo.png")} alt="logo" />
          <p>ESM Steg 7-9 v1</p>
          <p>arrow</p>
          <p>How are you feeling today?</p>
        </div>
        <div className={style.tabsDiv}>
          <p onClick={() => setActive(0)}>Settings</p>
          <p
            onClick={() => setActive(1)}
            style={{
              borderLeft: active === 1 && "1px solid #b7b7b7",
              borderTop: active === 1 && "1px solid #b7b7b7",
              borderRight: active === 1 && "1px solid #b7b7b7",
              borderBottom: active === 1 && "1px solid #ffffff",
              borderRadius: active === 1 && "8px 8px 0px 0px",
              color: active === 1 && "#000",
              fontWeight: active === 1 && "600",
            }}
          >
            Questions
          </p>
          <p onClick={() => setActive(2)}>Results</p>
          <p onClick={() => setActive(3)}>Thank you page</p>
        </div>
        <div className={style.questionDiv}>
          <div className={style.mainInner}>
            <div className={style.flex}>
              <h6> Q1 </h6>
            </div>
          </div>
          {addQuestion ? (
            <AddQuestion />
          ) : (
            <div className={style.bodyDiv}>
              <div className={style.flex}>
                <img src={require("../../logos/Vector.png")} alt="logo" />
                <p onClick={() => setAddQuestion(true)}>Add question</p>
              </div>
            </div>
          )}
        </div>
        <div className={style.footerDiv}>
          <img src={require("../../logos/Vector.png")} alt="logo" />
          <p>Add:</p>
          <span>Question block</span>
          <div className={style.border} />
          <span>Content block</span>
          <div className={style.border} />
          <span>Page break</span>
        </div>
        <div className={style.btnDiv}>
          <Button text="Save questions" type="button" onClick={onClick} />
          <Button text="Preview questionnaire" btnClass={style.btn} />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
