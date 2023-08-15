import { motion } from "framer-motion";
import { useList } from "react-use";
import { useModal } from "@/common/recoil/modal";
import { HomeAnimation } from "../animations/Home.animations";
import Agreeing from "../modals/Agreeing";
import PlaceAllPlayers from "../modals/PlaceAllPlayers";
import type { Player } from "../home.types";
import Header from "./Header";
import Players from "./Players";

const Home = () => {
  const [players, playersHandler] = useList<Player>([
    { name: "", id: 0 },
    { name: "", id: 1 },
  ]);

  const { openModal } = useModal();

  const handleStartGame = () => {
    if (players.some((player) => !player.name)) {
      openModal(<PlaceAllPlayers />);
    } else {
      openModal(
        <Agreeing
          handleClick={() => {
            console.log("введите игроков");
          }}
        />
      );
    }
  };

  return (
    <motion.div
      className="my-24 flex flex-col items-center gap-10"
      variants={HomeAnimation}
      initial="from"
      animate="to">
      <Header />
      <Players players={players} playersHandler={playersHandler} />

      <motion.span className="block h-full w-full bg-zinc-800" layout />

      <motion.button
        className="button w-72 transition-none sm:w-96"
        layout
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        onClick={handleStartGame}>
        Играем!
      </motion.button>
    </motion.div>
  );
};

export default Home;