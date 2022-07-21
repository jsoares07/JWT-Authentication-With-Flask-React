import React, { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getUserInfo();
  }, []);

  return (
    <>
      {localStorage.token ? (
        <div className="text-center">
          <h3>Profile</h3>
          <p>email: {store.userinfo.email}</p>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <h2 className="text-center">You are not logged in</h2>
          <Link to="/">
            <input type="button" value="Go Home" />
          </Link>
        </div>
      )}
    </>
  );
};
