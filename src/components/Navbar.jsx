import React, { useState } from "react";
import { useStateValue } from "../StateProvider";

const Navbar = () => {
  const [{ user, allAccounts }, dispatch] = useStateValue();

  const calcUs = (name) =>
    name
      .toLowerCase()
      .split(" ")
      .map((item) => item[0])
      .join("");
  allAccounts.forEach((acc) => (acc["usa"] = calcUs(acc.owner)));

  const checkCredential = (e) => {
    setUserName("");
    setPin("");
    e.preventDefault();
    const [userAccount] = allAccounts.filter((acc) => acc.pin === +pin);
    if (!userAccount) {
      alert("Account Not Find");
    }
    if (userAccount) {
      dispatch({
        type: "ADD_USER",
        payload: userAccount,
      });
    }
  };

  const [userName, setUserName] = useState("");
  const [pin, setPin] = useState("");
  const msg = user ? `Welcome Back ${user.owner}` : "Login to get Started";
  return (
    <>
      <nav>
        <p className="welcome">{msg}</p>

        <form className="login">
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="user"
            className="login__input login__input--user"
          />
          {/* <!-- In practice, use type="password" --> */}
          <input
            type="text"
            value={pin}
            onChange={(e) => {
              setPin(e.target.value);
            }}
            placeholder="PIN"
            maxLength="4"
            className="login__input login__input--pin"
          />
          {/* Button login  */}
          <button className="login__btn" onClick={checkCredential}>
            &rarr;
          </button>
          {/* <button onClick={(e) => openModal(e)}>Modal</button> */}
        </form>
      </nav>
    </>
  );
};

export default Navbar;
