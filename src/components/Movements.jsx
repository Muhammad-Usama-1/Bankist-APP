import React from "react";
import Movement from "./Movement";
import { useStateValue } from "../StateProvider";

const Movements = () => {
  let movements = [];
  const [{ user }] = useStateValue();
  if (user) {
    movements = user.movements;
  }

  if (user) {
    return (
      <>
        <div className="movements">
          {movements.map((movement, i) => (
            <Movement
              key={Math.random() * 1000}
              movement={movement}
              i={i}
              user={user}
            />
          ))}
        </div>
      </>
    );
  }
  return <></>;
};

export default Movements;
