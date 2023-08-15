import { useModal } from "@/common/recoil/modal";

const PlaceAllPlayers = () => {
  const { closeModal } = useModal();

  return (
    <>
      <p className="mb-4 text-lg">Заполните всех игроков!</p>
      <button className="button-secondary w-full" onClick={closeModal}>
        Закрыть
      </button>
    </>
  );
};

export default PlaceAllPlayers;
