import { Dispatch, SetStateAction, useEffect, useState } from "react";

import {
  GiPerspectiveDiceOne,
  GiPerspectiveDiceTwo,
  GiPerspectiveDiceThree,
  GiPerspectiveDiceFour,
  GiPerspectiveDiceFive,
  GiPerspectiveDiceSix,
} from "react-icons/gi";
import { GiRollingDices } from "react-icons/gi";

const Dice = ({
  dice,
  setDice,
}: {
  dice: number;
  setDice: Dispatch<SetStateAction<number>>;
}) => {
  const [tempDice, setTempDice] = useState(-1);

  useEffect(() => {
    setTempDice(dice);
  }, [dice]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDice(tempDice);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [setDice, tempDice]);

  const handleRollDice = () => {
    if (tempDice === -1)
      for (let i = 0; i < 25; i += 1)
        setTimeout(() => {
          const newDice = Math.floor(Math.random() * 6) + 1;
          setTempDice(newDice);
        }, i * 25);
  };

  return (
    <button
      className="button 20 absolute top-1/2 left-1/2 flex w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
      onClick={handleRollDice}
      style={{ fontSize: tempDice === -1 ? "3.2rem" : "2.4rem" }}>
      {tempDice === -1 && <GiRollingDices />}
      {tempDice === 1 && <GiPerspectiveDiceOne />}
      {tempDice === 2 && <GiPerspectiveDiceTwo />}
      {tempDice === 3 && <GiPerspectiveDiceThree />}
      {tempDice === 4 && <GiPerspectiveDiceFour />}
      {tempDice === 5 && <GiPerspectiveDiceFive />}
      {tempDice === 6 && <GiPerspectiveDiceSix />}
    </button>
  );
};

export default Dice;
