import Circle from "./Circle";

const Background = () => {
  return (
    <div className="fixed top-0 -z-50 h-[110%] w-full overflow-hidden bg-black">
      <div className="absolute h-full w-full bg-black/50 backdrop-blur-2xl" />
      <Circle color="lime" x={15} y={42} radius={16} />
      <Circle color="green" x={45} y={35} radius={10} />
      <Circle color="lime" x={70} y={67} radius={10} />
    </div>
  );
};

export default Background;
