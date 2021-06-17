import React from "react";
import { useStateValue } from "../StateProvider";

const Footer = () => {
  const [{ user }, dispatch] = useStateValue();

  // const dclass = user === true ? "" : "hidden";
  // const { movements } = accounts[0];
  const accountLogOut = (e) => {
    e.preventDefault();
    console.log(user);
    console.log("Log out");
    dispatch({
      type: "LOGOUT",
      payload: "",
    });
  };
  return (
    <div className="footer-box">
      <button className="btn logout" onClick={(e) => accountLogOut(e)}>
        Log out
      </button>
    </div>
  );
};

export default Footer;
