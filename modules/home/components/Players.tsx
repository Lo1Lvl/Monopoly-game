import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { ListActions } from "react-use/lib/useList";

import { inputAnimation } from "../animations/Players.animations";
import type { PlayerName } from "../home.types";

const Players = ({
  players,
  playersHandler,
}: {
  players: PlayerName[];
  playersHandler: ListActions<PlayerName>;
}) => {
  return (
    <div>
      <p className="text-center text-2xl">Кто играет?</p>

      <div className="mt-4 flex w-72 flex-col gap-4 sm:w-96">
        {players.map(({ name, id }, index) => {
          return (
            <motion.label
              key={id}
              layout
              variants={inputAnimation}
              initial="from"
              animate="to">
              <p className="mb-2 text-lg">{index + 1}. Игрок</p>
              <div className="relative">
                <input
                  className="input w-full overflow-hidden"
                  value={name}
                  onChange={(e) =>
                    playersHandler.updateAt(index, {
                      name: e.target.value,
                      id,
                    })
                  }
                  placeholder={`Введите имя здесь`}
                />
                {index > 1 && (
                  <button
                    className="button-secondary absolute top-0 right-0 flex h-full items-center justify-center px-3"
                    onClick={() => playersHandler.removeAt(index)}>
                    <AiOutlineClose />
                  </button>
                )}
              </div>
            </motion.label>
          );
        })}

        <motion.button
          layout
          className="button transition-none"
          onClick={() =>
            playersHandler.push({
              name: "",
              id: players[players.length - 1].id + 1,
            })
          }
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}>
          Добавить еще игрока
        </motion.button>
      </div>
    </div>
  );
};

export default Players;
