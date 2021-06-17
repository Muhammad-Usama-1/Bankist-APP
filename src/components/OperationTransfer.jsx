import React, { useState } from "react";
import { useStateValue } from "../StateProvider";

const OperationTransfer = () => {
  const [{ user, allAccounts }, dispatch] = useStateValue();

  const { movements } = user;
  const balance = movements
    ?.reduce((acc, movement) => (acc = acc + movement), 0)
    .toFixed(2);
  const [money, setMoney] = useState("");
  const [tuser, setTuser] = useState("");
  const btnTransfer = (e, money) => {
    setMoney("");
    setTuser("");
    money = +money;
    e.preventDefault();
    const [tAcc] = allAccounts.filter((acc) => acc.us === tuser);
    if (tAcc) {
      if (user.us === tAcc.us) {
        alert("Can't Transfer to itself");
        return;
      }
      if (balance > money) {
        user.movements.unshift(-money);
        tAcc.movements.unshift(money);
        user.movementsDates.unshift(new Date());
        tAcc.movementsDates.unshift(new Date());
      } else {
        alert("Cant Proceed Checked Account and Balance");
      }
    } else {
      alert("Transfer Account Not found");
    }
    // allAccounts.map((acc) => {

    // });

    dispatch({
      type: "TRANSFER",
      payload: user,
    });
  };
  return (
    <>
      <div className="operation operation--transfer">
        <h2>Transfer money</h2>
        <form className="form form--transfer">
          <input
            type="text"
            className="form__input form__input--to"
            value={tuser}
            onChange={(e) => {
              setTuser(e.target.value);
            }}
          />
          <input
            type="number"
            className="form__input form__input--amount"
            value={money}
            onChange={(e) => {
              setMoney(e.target.value);
            }}
          />
          <button
            className="form__btn form__btn--transfer"
            onClick={(e) => btnTransfer(e, money)}
          >
            &rarr;
          </button>
          <label className="form__label">Transfer to</label>
          <label className="form__label">Amount</label>
        </form>
      </div>
    </>
  );
};

export default OperationTransfer;
