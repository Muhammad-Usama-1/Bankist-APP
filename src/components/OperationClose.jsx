import React, { useState } from "react";
import { useStateValue } from "../StateProvider";

const OperationClose = () => {
  const [confirmPin, setConfirmPin] = useState("");
  const [{ user, allAccounts }, dispatch] = useStateValue();

  const closeAcc = (e, confirmPin) => {
    setConfirmPin("");
    confirmPin = +confirmPin;
    e.preventDefault();
    if (confirmPin === user.pin) {
      const index = allAccounts.findIndex((acc) => acc.pin === confirmPin);
      allAccounts.splice(index, 1);
      dispatch({
        type: "DELETE",
        payload: "",
      });
    } else {
      alert("Pin Not match ");
    }
  };
  return (
    <>
      <div className="operation operation--close">
        <h2>Close account</h2>
        <form className="form form--close">
          <input type="text" className="form__input form__input--user" />
          <input
            value={confirmPin}
            onChange={(e) => {
              setConfirmPin(e.target.value);
            }}
            type="password"
            maxLength="6"
            className="form__input form__input--pin"
          />
          <button
            className="form__btn form__btn--close"
            onClick={(e) => {
              closeAcc(e, confirmPin);
            }}
          >
            &rarr;
          </button>
          <label className="form__label">Confirm user</label>
          <label className="form__label">Confirm PIN</label>
        </form>
      </div>
    </>
  );
};

export default OperationClose;
