import React, { useEffect } from "react";
import TextField from "components/textfield";
import Button from "components/button";
import { useSelector, useDispatch } from "react-redux";
import style from "./login.module.scss";
import { setState } from "../../redux/auth.js";
import { LoginFunction } from "../../redux/auth.js";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const { username, password, isLogged, loading } = useSelector(
    (state: any) => state.auth
  );

  const handleChange = (field: string, index, value: string) => {
    dispatch(setState({ field, value }));
  };

  const handleClick = () => {
    dispatch(LoginFunction({ username, password }));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) navigate("/dashboard");
  }, [isLogged, navigate]);

  return (
    <>
      <div className={style.main}>
        <div className={style.bg}>
          <div style={{ width: "100%" }}>
            <form action="#">
              <h4>Let’s Start </h4>
              <p className={style.p}>
                Enter your credentials to sign into your account
              </p>
              <div className={style.loginDiv}>
                <TextField
                  id="employeeId"
                  placeholder="email@address.com"
                  label="Email *"
                  name="employeeId"
                  handleChange={handleChange}
                  field="username"
                />
                <div className={style.secondDiv}>
                  <TextField
                    id="password"
                    placeholder="****"
                    // type={passwordVisible ? "text" : "password"}
                    label="Password *"
                    // icon={passwordVisible ? eye : eyeHide}
                    name="password"
                    // onClick={() => setPasswordVisible(!passwordVisible)}
                    iconClass={style.iconClass}
                    handleChange={handleChange}
                    field="password"
                  />
                  {/* <Link to={"/forgot"} style={{ textDecoration: "none" }}> */}
                  <p>Forgot Password</p>
                  {/* </Link> */}
                </div>
              </div>
              <div className={style.logo}>
                <Button
                  id="logInBtn"
                  text="Sign in"
                  type="button"
                  btnClass={style.btn}
                  disabled={loading}
                  handleClick={handleClick}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
