import React, { useState } from "react";
import { useStateValue } from "../StateProvider";

const OperationLoan = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const { movements } = user;

  const requsetLoan = (e, loanAmount) => {
    e.preventDefault();
    setLoanAmount("");
    loanAmount = +loanAmount;
    if (loanAmount > 0 && movements.some((mov) => mov >= loanAmount * 0.1)) {
      user.movements.unshift(loanAmount);
      user.movementsDates.unshift(new Date());
      dispatch({
        type: "REQUEST_LOAN",
        payload: user,
      });
    } else {
      alert("Double Checked Your amount");
    }
  };
  return (
    <>
      <div className="operation operation--loan">
        <h2>Request loan</h2>
        <form className="form form--loan">
          <input
            value={loanAmount}
            onChange={(e) => {
              setLoanAmount(e.target.value);
            }}
            type="number"
            className="form__input form__input--loan-amount"
          />
          <button
            className="form__btn form__btn--loan"
            onClick={(e) => requsetLoan(e, loanAmount)}
          >
            &rarr;
          </button>
          <label className="form__label form__label--loan">Amount</label>
        </form>
      </div>
    </>
  );
};

export default OperationLoan;
