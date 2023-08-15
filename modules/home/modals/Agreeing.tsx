import { useModal } from "@/common/recoil/modal";

const Agreeing = ({ handleClick }: { handleClick: () => void }) => {
  const { closeModal } = useModal();
  return (
    <>
      <p className="mb-4 text-lg">Вы уверены?</p>
      <button
        className="button w-full"
        onClick={() => {
          handleClick();
          closeModal();
        }}>
        Вперед!
      </button>
    </>
  );
};
export default Agreeing;
