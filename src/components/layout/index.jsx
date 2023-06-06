import React from "react";

import style from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={style.main}>
      <div className={style.navbar}>
        <p>U-CARE</p>
        <div className={style.flex}>
          <p
            style={{
              color: " rgb(16, 53, 103)",
            }}
          >
            Research studies
          </p>
          <p>
            Researcher
            {/* <img src={arrow} alt=""/> */}
          </p>
          <div className={style.innerFlex}>
            <div className={style.moreInner}>
              <img src={require("../../logos/Avatar.png")} alt='logo'/>
              <p>Johanna Silver</p>
            </div>
            <div
              style={{
                height: "22px",
                border: "1px solid #6e6e6e",
              }}
            />
            <p>Logout</p>
          </div>
        </div>
      </div>
      <div className={style.body}>
        <div className={style.sidebar}>
        <div className={style.img}>
            <img src={require("../../logos/Group_179.png")} alt="logo" />
          </div>
          <div className={style.img}>
            <img src={require("../../logos/book_icon.png")} alt="logo" />
          </div>
          <div className={style.img}>
            <img src={require("../../logos/message_logo.png")} alt="logo" />
          </div>
        </div>
        <div className={style.card}>{children}</div>
      </div>
      <div className={style.footer}>
        <div className={style.inner1}>
           <img
                src={require("../../logos/Ucare_Logo.png")}
                alt="logo"
              />
          <div className={style.logoDiv}>
            <p>U-CARE</p>
            <p>Psychosocial care in the interactive society</p>
            <p>Last update 2022-09-20</p>
          </div>
          <img
                src={require("../../logos/Uppsala_University_Logo.png")}
                alt="logo"
              />
        </div>
        <p className={style.p}>
          Technical problems?
          <span>Contact support</span>
        </p>
      </div>
    </div>
  );
};

export default Layout;
