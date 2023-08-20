import { useState } from "react";

import { motion } from "framer-motion";

import { useModal } from "@/common/recoil/modal";
import { usePlayers } from "@/common/recoil/players";
import { useMoveHandler } from "../hooks/useMoveHandler";
import { useCalculatePosition } from "../hooks/useCalculatePosition";
import Dice from "./Dice";

const Board = () => {
  const { players } = usePlayers();

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [dice, setDice] = useState(-1);

  useCalculatePosition(dice, currentPlayerIndex);

  useMoveHandler(dice, () => {
    setDice(-1);
    setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
  });

  return (
    <div className="relative flex w-min flex-col-reverse justify-between gap-1">
      {Array.from({ length: 9 }).map((_, y) => {
        return (
          <div className="flex flex-row-reverse justify-between gap-1" key={y}>
            {Array.from({ length: 9 }).map((__, x) => {
              if (y > 0 && y < 8 && x !== 0 && x !== 8) return null;

              const leftSide = x === 8 && y !== 0 && y !== 8;
              const rightSide = x === 0 && y !== 0 && y !== 8;
              const bottomSide = y === 0;
              const topSide = y === 8;

              let rotate = rightSide ? 90 : 0;
              if (leftSide) rotate = -90;

              const playersOnTile = players.filter(
                (player) => player.position.x === x && player.position.y === y
              );

              return (
                <div
                  className="relative flex h-12 w-12 border-spacing-0 items-center justify-center rounded-lg bg-green-700/25 text-lime-300"
                  key={x}>
                  {`${y}-${x}`}
                  {playersOnTile.map(({ layoutId, name }, index) => {
                    const top = bottomSide ? `${105 + index * 20}%` : undefined;
                    const bottom = topSide ? `${105 + index * 20}%` : undefined;
                    const left = rightSide ? `${105 + index * 20}%` : undefined;
                    const right = leftSide ? `${105 + index * 20}%` : undefined;

                    return (
                      <motion.p
                        key={layoutId}
                        layout
                        layoutId={layoutId}
                        style={{ rotate, marginTop: index * 20 }}
                        className={`absolute z-10 p-1`}>
                        {name}
                      </motion.p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}

      <Dice setDice={setDice} dice={dice} />
    </div>
  );
};

export default Board;
