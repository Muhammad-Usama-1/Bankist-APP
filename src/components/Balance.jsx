import React from "react";
import { useStateValue } from "../StateProvider";

const Balance = () => {
  const getDate = () => {
    const now = new Date();
    const day = `${now.getDay()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    let hours = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    return `${day}/${month}/${year}, ${hours}:${min}`;
  };
  const [{ user }] = useStateValue();

  const { movements } = user;
  const balance = movements
    ?.reduce((acc, movement) => (acc = acc + movement), 0)
    .toFixed(2);

  return (
    <>
      <div className="balance">
        <div>
          <p className="balance__label">Current balance</p>
          <p className="balance__date">
            As of <span className="date">{getDate()}</span>
          </p>
        </div>
        <p className="balance__value">${balance}</p>
      </div>
    </>
  );
};

export default Balance;
