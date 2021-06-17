import React from "react";
import { useStateValue } from "../StateProvider";

const Summary = () => {
  console.log("Hello world");
  const [{ user }] = useStateValue();

  const { movements } = user;

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
        <button className="btn--sort"> &darr; SORT</button>
      </div>
    </>
  );
};

export default Summary;
