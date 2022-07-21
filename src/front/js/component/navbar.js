import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container d-flex justify-content-end">
        {localStorage.token ? (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              actions.logOut();
            }}
          >
            Log out
          </span>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};
