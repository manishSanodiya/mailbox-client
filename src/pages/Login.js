import React, { useRef, useState } from "react";
import classes from "./auth.module.css";
 import { useSelector,useDispatch } from "react-redux";
// import { loginActions } from "../store/loginSlice";
import { loginActions } from "../store/loginSlice";

import { Link } from "react-router-dom/cjs/react-router-dom.min";



const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();


const dispatch = useDispatch()
const isLoggedIn = useSelector((state) => state.login.isloggedIn);
 

  const [isLogin, setIsLogin] = useState(true);


  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

   
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDCw1Pru7_qCCLsi11I4nq73iSBZETir1U";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDCw1Pru7_qCCLsi11I4nq73iSBZETir1U";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "content-type": "authentication/json",
      },
    }).then((res) => {
     
      if (res.ok) {
        return res.json()
      } else {
        return res.json().then((data) => {
          let errorMessage = "Authentication failed!";
       
         
          throw new Error(errorMessage)
        });
      }
    }).then(data =>{
      console.log(data);
    
      localStorage.setItem("idToken", JSON.stringify(data.idToken));
      localStorage.setItem("data", JSON.stringify(data));
      setIsLogin(true);
      dispatch(loginActions.login());

    })


      .catch((err) => {
        alert(err.message);
      });
  };
 


  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
       
            <button>{isLogin ? "login" : "create account"}</button>
        
          
          <Link to="/forgot-password">forgot password click here</Link>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
