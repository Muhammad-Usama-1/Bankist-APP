import React from "react";

const Movement = ({ movement, i, user }) => {
  const type = movement > 0 ? "deposit" : "withdrawal";
  const getMovementsDate = () => {
    const moveData = new Date(user.movementsDates[i]);
    const day = `${moveData.getDay()}`.padStart(2, 0);
    const month = `${moveData.getMonth() + 1}`.padStart(2, 0);
    const year = moveData.getFullYear();
    const daysPassed = calcDaysPassed(new Date(), moveData);
    if (daysPassed === 0) {
      return "Today";
    }
    if (daysPassed === 1) {
      return "Yesterday";
    }
    if (daysPassed <= 7) {
      return `${daysPassed} days ago`;
    }
    return `${day}/${month}/${year}`;
  };
  const calcDaysPassed = (date1, date2) => {
    return Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
  };

  return (
    <>
      <div className="movements__row">
        <div className={`movements__type movements__type--${type}`}>
          {i + 1} {movement > 0 ? "deposit" : "withdrawal"}
        </div>
        <div className="movements__date">{getMovementsDate()}</div>
        <div className="movements__value">${Math.abs(movement)}</div>
      </div>
    </>
  );
};

export default Movement;
