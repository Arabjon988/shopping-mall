import { useRef, useContext } from "react";
import { Navigate } from "react-router-dom";
import Context from "../../context/Context";

import "./login.css";

const Login = () => {
  const { setUser } = useContext(Context);
  const fullNameRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      fullName: fullNameRef.current.value,
      password: passwordRef.current.value,
    };
    setUser(payload);
    return Navigate("/");
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login_main">
          <form action="#" className="login_form" onSubmit={onSubmit}>
          <h1>A'zo bo'lish</h1>
            <div class="">
              <label htmlFor="name" className="">
                Full Name
              </label>
              <input
                ref={fullNameRef}
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className=""
              />
            </div>
            <div class="">
              <label htmlFor="passwod" className="">
                Password
              </label>
              <input
                ref={passwordRef}
                type="password"
                name="email"
                id="email"
                placeholder="..."
                className=""
              />
            </div>
            <div>
              <button type="submit" className="">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
