import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [logIn, setLogIn] = useState({});
  const [signUp, setSingUp] = useState({});

  const navigate = useNavigate();

  const navigateProfile = () => {
    navigate("/profile");
  };

  return (
    <>
      {localStorage.getItem("token") ? (
        useEffect(() => {
          navigateProfile();
        })
      ) : (
        <div>
          <div className="text-center mt-5 mx-auto" style={{ width: "10rem" }}>
            <h4>Sign up</h4>
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => {
                setSingUp({ ...signUp, email: e.target.value });
              }}
              name="email"
              type="email"
              id="email"
              className="inputgroup"
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => {
                setSingUp({ ...signUp, password: e.target.value });
              }}
              name="password"
              type="password"
              id="password"
              className="inputgroup"
            />
            <label htmlFor="repeatpassword">Repeat Password</label>
            <input
              onChange={(e) => {
                setSingUp({ ...signUp, repeatpassword: e.target.value });
              }}
              name="repeatpassword"
              type="password"
              id="repeatpassword"
              className="inputgroup"
            />
            <input
              onClick={() => {
                actions.signUp(signUp);
              }}
              type="button"
              className="Submit mt-2"
              value={"Submit"}
            />
          </div>
          <div className="text-center mt-5 mx-auto" style={{ width: "10rem" }}>
            <h4>Log in</h4>
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => {
                setLogIn({ ...logIn, email: e.target.value });
              }}
              name="email"
              type="email"
              id="email"
              className="inputgroup"
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => {
                setLogIn({ ...logIn, password: e.target.value });
              }}
              name="password"
              type="password"
              id="password"
              className="inputgroup"
            />
            <input
              onClick={() => {
                actions.logIn(logIn);
              }}
              type="button"
              className="Submit mt-2"
              value={"Submit"}
            />
          </div>
        </div>
      )}
    </>
  );
};
