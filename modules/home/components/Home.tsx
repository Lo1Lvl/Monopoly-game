import { motion } from "framer-motion";
import { useList } from "react-use";
import { useModal } from "@/common/recoil/modal";
import { usePlayers } from "@/common/recoil/players";
import { HomeAnimation } from "../animations/Home.animations";
import Agreeing from "../modals/Agreeing";
import PlaceAllPlayers from "../modals/PlaceAllPlayers";
import type { PlayerName } from "../home.types";
import Header from "./Header";
import Players from "./Players";
import { useRouter } from "next/router";

const Home = () => {
  const { setupPlayers } = usePlayers();

  const [players, playersHandler] = useList<PlayerName>([
    { name: "", id: 0 },
    { name: "", id: 1 },
  ]);

  const { openModal } = useModal();

  const router = useRouter();

  const handleStartGame = () => {
    router.prefetch("/game");
    if (players.some((player) => !player.name)) {
      openModal(<PlaceAllPlayers />);
    } else {
      openModal(
        <Agreeing
          handleClick={() => {
            setupPlayers(players);
            router.push("/game");
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

      <motion.span className="block h-px w-1/5 bg-lime-500 md:w-1/2" layout />

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