import React, { useState } from "react";
import { useStateValue } from "../StateProvider";

const Summary = () => {
  const [sort, setSort] = useState(false);
  console.log("Hello world");
  const [{ user }, dispatch] = useStateValue();

  const { movements } = user;
  const sortMovements = () => {
    setSort(!sort);
    if (!sort) {
      movements.sort((a, b) => a - b);
      dispatch({
        type: "SORT",
        payload: user,
      });

      console.log("Sort the movemnts");
    }
    if (sort) {
      movements.sort((a, b) => b - a);
      dispatch({
        type: "SORT",
        payload: user,
      });

      console.log("Sort the movemnts");
    }

    // return < 0 ,  A, B (keep order)
    // return > 0 ,  B, A (switch order)
  };
  // Deposit
  const deposit = movements
    .filter((movement) => movement > 0)
    .reduce((acc, movement) => (acc = acc + movement), 0)
    .toFixed(2);
  // Witdrrawl Amount
  const withdrawal = movements
    .filter((movement) => movement < 0)
    .reduce((acc, movement) => (acc = acc + movement), 0)
    .toFixed(2);
  const interset = movements
    .filter((movement) => movement > 0)
    .map((movement) => (movement * 1.2) / 100)
    .reduce((acc, movement) => (acc = acc + movement), 0)
    .toFixed(2);
  return (
    <>
      <div className="summary">
        <p className="summary__label">In</p>
        <p className="summary__value summary__value--in">{deposit}$</p>
        <p className="summary__label">Out</p>
        <p className="summary__value summary__value--out">
          {Math.abs(withdrawal)}$
        </p>
        <p className="summary__label">Interest</p>
        <p className="summary__value summary__value--interest">{interset}$</p>
        <button className="btn--sort" onClick={sortMovements}>
          &darr; SORT
        </button>
      </div>
    </>
  );
};

export default Summary;
