import logo from "../../../public/monopoly.webp";
import Image from "next/image";
const Header = () => {
  return (
    <header>
      <Image src={logo} alt="title" />
      <h1 className="gradient-text text-center text-4xl font-extrabold uppercase md:text-6xl">
        Монополия
      </h1>
      <h2 className="gradient-text text-center text-xl font-extrabold uppercase sm:text-3xl">
        Банк без границ
      </h2>
    </header>
  );
};

export default Header;
